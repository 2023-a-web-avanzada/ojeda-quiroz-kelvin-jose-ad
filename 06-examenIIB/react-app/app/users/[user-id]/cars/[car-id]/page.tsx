'use client'

import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import axios from 'axios';
import {Car} from "@/types/car";
import {User} from "@/types/user";

const carsURL = 'http://localhost:3030/cars';
const usersURL = 'http://localhost:3030/users';

export default function Page(
    {params}: { params: { 'user-id': number, 'car-id': number | 'create' } }
) {
    const [users, setUsers] = useState([] as User[]);
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const router = useRouter();

    useEffect(() => {
        getAllUsers().then();

        if (params['car-id'] !== 'create') {
            getOneCarById(params['car-id']).then();
        }
    }, []);

    useEffect(() => {
        setValue('user', params['user-id']);
    }, [users]);

    // Get all users
    async function getAllUsers() {
        const response = await axios.get(usersURL)

        if (response.statusText === 'OK') {
            setUsers(response.data);
        }
    }

    // Get one user by id
    async function getOneCarById(carId: number) {
        try {
            const response = await axios.get(carsURL + `/${carId}`)

            if (response.statusText === 'OK') {
                // Fill form inputs
                if (response.data) {
                    for (const key in response.data) {
                        if (response.data.hasOwnProperty(key)) {
                            if (key === 'dateCar') {
                                const dateCarDate = new Date(response.data[key]);
                                setValue(key, dateCarDate.toISOString().split('T')[0]);
                            } else {
                                setValue(key, response.data[key]);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error while fetching car:', error);
        }
    }

    async function createCar(car: Car) {
        try {
            const response = await axios.post(carsURL + '/create', car);

            if (response.statusText === 'Created') {
                router.push("../cars");
            }
        } catch (error) {
            console.log('Error while creating car:', error);
        }
    }

    async function updateCar(carId: number, car: Car) {
        try {
            const response = await axios.put(carsURL + `/${carId}`, car);

            if (response.statusText === 'OK') {
                router.push("../cars");
            }
        } catch (error) {
            console.log('Error while updating car:', error);
        }
    }

    // Handle form submit
    const onSubmit = (data: any) => {
        // Update car
        if (params['car-id'] !== 'create') {
            updateCar(params['car-id'], data as Car).then();
        }
        // Create car
        else {
            createCar(data as Car).then();
        }
    };

    return (
        <>
            <div className="bg-black-100 h-screen w-screen text-neutral-950 p-12 py-10 text-white">
                {/* HEADER */}
                <div className="py-2 mb-7 text-center">
                    <a className="text-3xl font-bold hover:text-blue-900" href="../../../users">
                        User - Car
                    </a>
                </div>

                {/* CAR OPTIONS */}
                <div className="flex min-h-[75px] items-center bg-black-300 mb-9 rounded-xl border-1 border-black-200">
                    <h3 className="ml-5 w-full text-xl font-bold">
                        {params['car-id'] !== 'create' ? 'Car Edition' : 'Car Creation'}
                    </h3>
                </div>

                {/* CAR FORM */}
                <div>
                    <form className="max-w-md mx-auto p-4 border rounded shadow" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block mb-1">Registration:</label>
                                <input
                                    className="w-full py-2 px-3 border rounded text-black"
                                    {...register('registration', {required: true})}
                                />
                                {errors.registration && <p className="text-red-500">Registration is required</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">Date Car:</label>
                                <input
                                    className="w-full py-2 px-3 border rounded text-black"
                                    type="date"
                                    {...register('dateCar', {required: true})}
                                />
                                {errors.dateCar && <p className="text-red-500">Date car is required</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">Mileage :</label>
                                <input
                                    className="w-full py-2 px-3 border rounded text-black"
                                    {...register('mileage', {required: true, pattern: /^\d+(\d{1,2})?$/})}
                                />
                                {errors.mileage?.type === 'required' && (
                                    <p className="text-red-500">Mileage is required</p>
                                )}
                                {errors.mileage?.type === 'pattern' && (
                                    <p className="text-red-500">
                                        Mileage must be a valid number (until 2 decimal)
                                    </p>
                                )}
                            </div>


                            <div className="flex items-center mb-4">
                                <label className="mb-1 mr-4">is New:</label>
                                <input className="py-2 px-3" type="checkbox" {...register('isNew')} />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">User:</label>
                                <select
                                    className="w-full py-2 px-3 border rounded text-black"
                                    {...register('user', {required: true})}
                                >
                                    <option value="">Select a user</option>
                                    {users.map(user => (
                                        <option key={user.id} value={user.id}>
                                            {user.name + ` (ID: ${user.id})`}
                                        </option>
                                    ))}
                                </select>
                                {errors.user && <p className="text-red-500">User is required</p>}
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex mt-4">
                            <button
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                                type="submit"
                            >
                                Save
                            </button>

                            <a
                                href="../cars"
                                className="flex-1 text-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                            >
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}