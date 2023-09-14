'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { User } from "@/types/user";
import UsersTable from "@/app/components/users-table";

const url = 'http://localhost:3030/users';

export default function Page() {
    const [ users, setUsers ] = useState([] as User[]);
    const router = useRouter();

    useEffect(() => {
        getAllUsers().then();
    }, []);

    // Get all users
    async function getAllUsers() {
        const response = await axios.get(url)

        if (response.statusText === 'OK') {
            setUsers(response.data);
        }
    }

    // Handle create action
    const handleCreateAction = () => {
        router.push("/users/create");
    };

    // Handle delete action
    const handleDeleteAction = async (userId: number) => {
        try {
            const response = await axios.delete(url + `/${userId}`)

            if (response.statusText === 'OK') {
                getAllUsers().then(() => undefined);
            }
        } catch (error) {
            console.error('Error while deleting user:', error);
        }
    };

    return (
        <>
            <div className={ 'bg-black-300 h-screen w-screen text-neutral-950 p-12 py-10 text-white' }>
                {/* HEADER */}
                <div className={ 'py-2 mb-7 text-center' }>
                    <a className={ 'text-3xl font-bold hover:text-blue-900 text-center' } href={ './users' }>
                        User - Car
                    </a>
                </div>

                {/* User OPTIONS */}
                <div className={ 'flex min-h-[75px] items-center bg-black-300 mb-9 ' +
                    'rounded-xl border-1 border-black-100' }>
                    <h3 className={ 'ml-5 w-full text-xl font-bold' }>
                        Users
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
                    {/* User LIST */}
                    <UsersTable
                        users={ users }
                        onDelete={ userId => { handleDeleteAction(userId).then() } }
                    />
                </div>
            </div>
        </>
    )
}