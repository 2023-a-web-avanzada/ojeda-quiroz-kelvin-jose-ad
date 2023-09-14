'use client'

import { User } from "@/types/user";

export default function UsersTable(
    params: {
        users: User[],
        onDelete: (userId: number) => undefined,
    }
) {
    const { users, onDelete } = params;

    // Handle delete action
    const handleDeleteAction = (userId: number | undefined) => {
        if (userId) {
            onDelete(userId);
        }
    };

    return (
        <div>
            <table className="min-w-full">
                <thead>
                <tr className="bg-gray-200 text-black">
                    <th className="py-2 px-4 text-left">ID</th>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Year</th>
                    <th className="py-2 px-4 text-left">Is Maritate</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                </tr>
                </thead>

                <tbody>
                {users.map(user => (
                    <tr className="border-t border-gray-200" key={ user.id }>
                        <td className="py-2 px-4">{ user.id }</td>
                        <td className="py-2 px-4">{ user.name }</td>
                        <td className="py-2 px-4">{ user.year }</td>
                        <td className="py-2 px-4">{ user.isMaritate ? 'True' : 'False'}</td>
                        <td className="py-2 px-4 space-x-2">
                            <a href={ `users/${ user.id }/cars` }>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                                    List cars
                                </button>
                            </a>
                            <a href={ `users/${ user.id }` }>
                                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                                    Edit
                                </button>
                            </a>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                onClick={ event => {
                                    event.preventDefault();
                                    handleDeleteAction(user.id);
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}