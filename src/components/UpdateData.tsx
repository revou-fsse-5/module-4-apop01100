import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { updateSchema } from './schemas/schemas'
import { CategoryData } from '../interface/Category'

const UpdateData = () => {
    const { id, name, description } = useParams<{ 
        id: string,
        name: string,
        description: string
    }>()
    const navigate = useNavigate()

    const updateCategory = async (body: Partial<CategoryData>) => {
        try {
            const response = await fetch(`http://localhost:8080/categories/${id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok)
                throw new Error(`Response status: ${response.status}`)
        } catch(error) {
            console.log(error)
        };
    }

    const backHandle = () => {
        navigate('/category')
    }

    const submitHandle = (body: Partial<CategoryData>) => {
        updateCategory(body)
        navigate('/category')
    }
    
  return (
    <div className='min-h-screen flex  items-center  justify-center'>
      <div className='py-3 px-8 h-fit w-96  bg-white rounded-xl shadow-xl'>
        <Formik 
            initialValues={{
                name: name,
                description: description
            }}
            validationSchema={updateSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values)
                    submitHandle(values)
                    setSubmitting(false)
                }, 400);
            }}
        >
            {({ isSubmitting }) => 
                <Form>
                    <div
                        className='flex flex-row justify-center my-3'
                    >
                        <legend
                        className='block text-gray-800 text-2xl font-bold'
                        >
                            Update Category
                        </legend>
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='name'
                            className='block text-gray-800 font-bold'
                        >
                            Name
                        </label>
                        <Field
                            id='name'
                            name='name'
                            type='text'
                            className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
                        />
                        <ErrorMessage
                            name='name'
                            component='div'
                            className='text-red-500 text-sm mt-1'
                        />
                        
                        <label
                            htmlFor='description'
                            className='block text-gray-800 font-bold'
                        >
                            Description
                        </label>
                        <Field 
                            id='description'
                            name='description'
                            type='text'
                            className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
                        />
                        <ErrorMessage
                            name='description'
                            component='div'
                            className='text-red-500 text-sm mt-1'
                        />

                        <div
                            className='flex justify-between gap-10'
                        >
                            <button
                            type='button'
                            className='cursor-pointer py-2 px-4 mt-4 block bg-blue-500 text-white font-bold w-full text-center rounded-xl'
                            onClick={backHandle}
                        >
                            Back
                        </button>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='cursor-pointer py-2 px-4 mt-4 block bg-blue-500 text-white font-bold w-full text-center rounded-xl'
                        >
                            Update
                        </button>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
      </div>
    </div>
  )
}

export default UpdateData