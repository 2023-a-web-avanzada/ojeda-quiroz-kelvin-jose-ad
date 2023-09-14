'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { Car } from "@/types/car";
import CarsTable from "@/app/components/cars-table";

const url = 'http://localhost:3030/cars';

export default function Page(
    { params }: { params: { 'user-id': number | 'create' } }
) {
    const [ cars, setCars ] = useState([] as Car[]);
    const router = useRouter();

    useEffect(() => {
        getAllCarsByUserId().then();
    }, []);

    // Get all cars by user id
    async function getAllCarsByUserId() {
        const response = await axios.get(url + `/by-user/${params['user-id']}`)

        if (response.statusText === 'OK') {
            setCars(response.data);
        }
    }

    // Handle create action
    const handleCreateAction = () => {
        router.push(`/users/${params['user-id']}/cars/create`);
    };

    // Handle delete action
    const handleDeleteAction = async (carId: number) => {
        try {
            const response = await axios.delete(url + `/${carId}`)

            if (response.statusText === 'OK') {
                getAllCarsByUserId().then(() => undefined);
            }
        } catch (error) {
            console.error('Error while deleting car:', error);
        }
    };

    return (
        <>
            <div className={ 'bg-black-300 h-screen w-screen text-neutral-950 p-12 py-10 text-white' }>
                {/* HEADER */}
                <div className={ 'py-2 mb-7  text-center' }>
                    <a className={ 'text-3xl font-bold hover:text-blue-900' } href={ '../../users' }>
                        User - Car
                    </a>
                </div>

                {/* Car OPTIONS */}
                <div className={ 'flex min-h-[75px] items-center bg-black-300 mb-9 ' +
                    'rounded-xl border-1 border-slate-200' }>
                    <h3 className={ 'ml-5 w-full text-xl font-bold' }>
                        Cars
                    </h3>
                    <button
                        className={ 'bg-blue-500 hover:bg-blue-600 text-white ' +
                            'px-5 py-2.5 my-2.5 mx-5 rounded-xl' }
                        onClick={ event => {
                            event.preventDefault();
                            handleCreateAction();
                        }}
                    >
                        Create
                    </button>
                </div>

                <div>
                    <CarsTable
                        cars={ cars }
                        onDelete={ carId => { handleDeleteAction(carId).then() } }
                    />
                </div>
            </div>
        </>
    )
}