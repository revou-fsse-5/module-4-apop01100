import React from 'react'
import { Field, ErrorMessage } from 'formik'

function StepThree() {
  return (
    <>
      <div
        className='mb-4'
      >
        <label
          htmlFor='zipCode'
          className='block text-gray-800 font-bold'
        >
          Username
        </label>
        < Field
          id='username'
          name='username'
          type='text'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="username"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div
        className='mb-4'
      >
        <label
          htmlFor='zipCode'
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
          name="password"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  )
}

export default StepThree