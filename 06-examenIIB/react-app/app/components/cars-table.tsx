'use client'

import { Car } from "@/types/car";

export default function CarsTable(
    params: {
        cars: Car[],
        onDelete: (carId: number) => undefined,
    }
) {
    const { cars, onDelete } = params;

    // Handle delete action
    const handleDeleteAction = (carId: number | undefined) => {
        if (carId) {
            onDelete(carId);
        }
    };

    return (
        <>
            <div>
                <table className="min-w-full">
                    <thead>
                    <tr className="bg-gray-200 text-black">
                        <th className="py-2 px-4 text-left">ID</th>
                        <th className="py-2 px-4 text-left">Registration</th>
                        <th className="py-2 px-4 text-left">Date Car</th>
                        <th className="py-2 px-4 text-left">Mileage</th>
                        <th className="py-2 px-4 text-left">IsNew</th>
                        <th className="py-2 px-4 text-left">User</th>
                        <th className="py-2 px-4 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cars.map(car => (
                        <tr className="border-t border-gray-300" key={car.id}>
                            <td className="py-2 px-4">{ car.id }</td>
                            <td className="py-2 px-4">{ car.registration }</td>
                            <td className="py-2 px-4">{ new Date(car.dateCar).toLocaleDateString() }</td>
                            <td className="py-2 px-4">{ car.mileage }</td>
                            <td className="py-2 px-4">{ car.isNew ? 'Yes' : 'No' }</td>
                            <td className="py-2 px-4">{ car.user }</td>
                            <td className="py-2 px-4 space-x-2">
                                <a href={`cars/${car.id}`}>
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                                        Edit
                                    </button>
                                </a>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleDeleteAction(car.id);
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
        </>
    )
}