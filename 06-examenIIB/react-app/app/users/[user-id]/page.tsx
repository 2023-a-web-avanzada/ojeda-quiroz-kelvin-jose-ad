'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { User } from "@/types/user";

const url = 'http://localhost:3030/users';

export default function Page(
    { params }: { params: { 'user-id': number | 'create' } }
) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const router = useRouter();

    useEffect(() => {
        if (params['user-id'] !== 'create') {
            getOneUserById(params['user-id']).then();
        }
    }, []);

    // Get one user by id
    async function getOneUserById(userId: number) {
        try {
            const response = await axios.get(url + `/${userId}`)

            if (response.statusText === 'OK') {
                // Fill form inputs
                if (response.data) {
                    for (const key in response.data) {
                        if (response.data.hasOwnProperty(key)) {
                            setValue(key, response.data[key]);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error while fetching user:', error);
        }
    }

    async function createUser(user: User) {
        try {
            const response = await axios.post(url + '/create', user);

            if (response.statusText === 'Created') {
                router.push("../users");
            }
        } catch (error) {
            console.log('Error while creating user:', error);
        }
    }

    async function updateUser(userId: number, user: User) {
        try {
            const response = await axios.put(url + `/${ userId }`, user);

            if (response.statusText === 'OK') {
                router.push("../users");
            }
        } catch (error) {
            console.log('Error while updating user: ', error);
        }
    }

    // Handle form submit
    const onSubmit = (data: any) => {
        // Update user
        if (params['user-id'] !== 'create') {
            updateUser(params['user-id'], data as User).then();
        }
        // Create user
        else {
            createUser(data as User).then();
        }
    };

    return (
        <>
            <div className={ 'bg-black-100 h-screen w-screen text-neutral-950 p-12 py-10 text-white' }>
                {/* HEADER */}
                <div className={ 'py-2 mb-7 text-center' }>
                    <a className={ 'text-3xl font-bold hover:text-blue-900' } href={ '../users' }>
                        User - Car
                    </a>
                </div>

                {/* USERS OPTIONS */}
                <div className={ 'flex min-h-[75px] items-center bg-black-300 ' +
                    'mb-9 rounded-xl border-1 border-slate-200' }>
                    <h3 className={ 'ml-5 w-full text-xl font-bold' }>
                        { params['user-id'] !== 'create' ? 'User Edition' : 'User Creation' }
                    </h3>
                </div>

                {/* USER FORM */}
                <div>
                    <form className="max-w-md mx-auto p-4 border rounded shadow" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block mb-1">Name:</label>
                            <input
                                className="w-full py-2 px-3 border rounded text-black"
                                {...register('name', { required: true })}
                            />
                            {errors.name && <p className="text-red-500">Name is required</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Year:</label>
                            <input
                                className="w-full py-2 px-3 border rounded text-black"
                                {...register('year', { required: true, pattern: /^\d+(\.\d{1,2})?$/ })}
                            />
                            {
                                errors.year?.type === 'required' &&
                                <p className="text-red-500">Year is required</p>
                            }
                            {errors.budget?.type === 'pattern' && (
                                <p className="text-red-500">Year must be a valid number (until 2 decimals)</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">is Maritate:</label>
                            <input className="py-2 px-3" type="checkbox" {...register('isMaritate')} />
                        </div>


                        {/* BUTTONS */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" type="submit">
                            Save
                        </button>

                        <a
                            href={ '../users' }
                            className="inline-block ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                            Cancel
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}