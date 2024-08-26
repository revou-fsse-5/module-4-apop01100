import React, { MouseEventHandler, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoTrash } from "react-icons/go";
import { MdModeEdit } from "react-icons/md";

interface Category {
    id: number
    name: string
    description: string
}

const Category = () => {
    const [categories, setcategories] = useState<Category[]>([])
    const navigate = useNavigate();
    
    const fetchCategory = async () => {
        try {
            const response = await fetch('http://localhost:8080/categories')
            if (!response.ok)
                throw new Error(`Response status: ${response.status}`)

            const result = await response.json()

            setcategories(result);
        } catch(error) {
            console.log(error)
        };
    }

    const deleteCategory = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/categories/${id}`,
                {
                    method: 'DELETE'
                }
            )

            if (!response.ok)
                throw new Error(`Response status: ${response.status}`)

        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    const addDataHandle = () => {
        navigate('/add')
    }

  return (
    <div className="flex min-h-screen items-center justify-center">
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center py-1">
                <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-bold text-base text-blueGray-700">
                        Do you want add some product?
                    </h3>
                </div>
                <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                    <button className="bg-blue-500 text-white text-sm font-bold px-3 py-2 rounded-xl mr-1 mb-1" type="button" onClick={addDataHandle}>
                        ADD
                    </button>
                </div>
            </div>
        </div>

        <table className="min-w-full">
        <thead className='bg-gray-200'>
            <tr className="bg-blue-gray-100 text-gray-700">
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Action</th>
            </tr>
        </thead>
        <tbody className="text-blue-gray-900">
            {categories.map((category, id) => (
                <tr key={id} className="border-b border-blue-gray-200">
                    <td className="py-3 px-4">{category.id}</td>
                    <td className="py-3 px-4">{category.name}</td>
                    <td className="py-3 px-4">{category.description}</td>
                    <td className="py-3 px-4">
                        <div
                            className='flex justify-between gap-1'
                        >
                            <button
                                className='cursor-pointer py-2 px-2 block bg-blue-500 text-center rounded-xl'
                                onClick={() => {
                                    navigate(`/update/${category.id}/${category.name}/${category.description}`)
                                }}
                            >
                                <MdModeEdit />
                            </button>
                            <button
                                className='cursor-pointer py-2 px-2 block bg-red-500 text-center rounded-xl'
                                onClick={() => {
                                    deleteCategory(category.id)
                                    navigate(0)
                                }}
                            >
                                <GoTrash />
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default Category