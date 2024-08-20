import React from 'react'
import { Field, ErrorMessage } from 'formik'

function StepOne() {
  return (
    <>
      <div className='mb-4'>
        <label
          htmlFor='fullName'
          className='block text-gray-800 font-bold'
        >
          Full Name
        </label>
        < Field
          id='fullName'
          name='fullName'
          type='text'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="fullName"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='birth'
          className='block text-gray-800 font-bold'
        >
          Date of Birth
        </label>
        <Field
          id='birth'
          name='birth'
          type='date'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="birth"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-gray-800 font-bold'
        >
          Email
        </label>
        <Field
          id='email'
          name='email'
          type='email'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  )
}

export default StepOne