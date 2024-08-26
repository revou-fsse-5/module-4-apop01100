import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import { loginSchema } from './schemas/schemas'

const Login = () => {
  const navigate = useNavigate()

  const loginHandle = () => {
    navigate('/category')
  }

  const signUpHandle = () => {
    navigate('/signup')
  }

  return (
    <div className='min-h-screen flex  items-center  justify-center'>
      <div className='py-3 px-8 h-fit w-96  bg-white rounded-xl shadow-xl'>
        <Formik 
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values)
                    loginHandle()
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
                            Login
                        </legend>
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='username'
                            className='block text-gray-800 font-bold'
                        >
                            Username
                        </label>
                        <Field
                            id='username'
                            name='username'
                            type='text'
                            className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
                        />
                        <ErrorMessage
                            name='username'
                            component='div'
                            className='text-red-500 text-sm mt-1'
                        />
                        
                        <label
                            htmlFor='password'
                            className='block text-gray-800 font-bold'
                        >
                            Password
                        </label>
                        <Field 
                            id='password'
                            name='password'
                            type='password'
                            className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
                        />
                        <ErrorMessage
                            name='password'
                            component='div'
                            className='text-red-500 text-sm mt-1'
                        />

                        <div
                            className='flex justify-between gap-10'
                        >
                            <button
                            type='button'
                            className='cursor-pointer py-2 px-4 mt-4 block bg-blue-500 text-white font-bold w-full text-center rounded-xl'
                            onClick={signUpHandle}
                        >
                            Sign Up
                        </button>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='cursor-pointer py-2 px-4 mt-4 block bg-blue-500 text-white font-bold w-full text-center rounded-xl'
                        >
                            Login
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

export default Login