import React from 'react'
import { Form, Formik } from 'formik';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { FormData } from '../interface/FormData';
import { stepOneSchema, stepTwoSchema, stepThreeSchema } from './schemas/schemas';
import { description } from './Description';
import useMultipleForm from './useMultipleForm';

const initialValues: Partial<FormData> = {
    fullName: '',
    birth: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
    password: ''
  }

const SignUp = () => {
    const { steps, currentStep, step, isFirstStep, isLastStep, back, next } = useMultipleForm([
        <StepOne />,
        <StepTwo />,
        <StepThree />
      ])

    const addUser = async (values:Partial<FormData>) => {
      try{
        const response = await fetch('http://localhost:8080/users',
          {
            method: 'POST',
            body: JSON.stringify({
              fullName: values.fullName,
              email: values.email,
              dateOfbirth: values.birth,
              address: {
                street: values.address,
                city: values.city,
                state: values.state,
                zipCode: values.zipCode
              },
              username: values.username,
              password: values.password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        
        if(!response.ok)
          throw new Error(`Response status: ${response.status}`)
      } catch(error) {
        console.log(error)
      }
    }

    const handleSubmit = (step: number, values: Partial<FormData>) => {
      if (isLastStep) {
        console.log('Step: ', step)
        addUser(values)
        alert(JSON.stringify(values))
      } else {
        console.log('Step: ', step)
        next()
      }
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='py-3 px-8 h-fit w-96 bg-white rounded-xl shadow-xl'>
        <Formik
          initialValues={
            initialValues
          }
          validationSchema={
            currentStep === 0 ? stepOneSchema : currentStep === 1 ? stepTwoSchema : stepThreeSchema
          }
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(currentStep, values)
              setSubmitting(false)
              console.log(values)
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form >
              <div
                className='flex flex-row justify-between mb-4'
              >
                <legend
                  className='block text-gray-800 text-2xl font-bold'
                >
                  {description(currentStep)}
                </legend>
                <div
                  className='block text-gray-800 text-2xl font-bold'
                >
                  {currentStep + 1} / {steps.length}
                </div>
              </div>

              {step}

              <div
                className='flex justify-between gap-10'
              >
                {!isFirstStep && (
                  <button 
                    type='button' 
                    onClick={back}
                    className='cursor-pointer py-2 px-4 mt-4 block bg-blue-500 text-white font-bold w-full text-center rounded-xl'
                  >
                    Back
                  </button>
                )}
                <button 
                  type='submit'
                  disabled={isSubmitting}
                  className='cursor-pointer py-2 px-4 mt-4 block bg-blue-500 text-white font-bold w-full text-center rounded-xl'
                >
                  {isLastStep ? 'Submit' : 'Next'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignUp