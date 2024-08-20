import React from 'react';
import './App.css';
import useMultipleForm from './components/useMultipleForm';
import { FormData } from './interface/FormData';
import { description } from './components/Description'
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import { Form, Formik } from 'formik';
import { stepOneSchema, stepThreeSchema, stepTwoSchema } from './components/schemas/schemas';

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

function App() {
  const { steps, currentStep, step, isFirstStep, isLastStep, back, next } = useMultipleForm([
    <StepOne />,
    <StepTwo />,
    <StepThree />
  ])

  const handleSubmit = (step: number, values: Partial<FormData>) => {
    if (isLastStep) {
      console.log('Step: ', step)
      alert(JSON.stringify(values))
    } else {
      console.log('Step: ', step)
      next()
    }
  }

  return (
    <div className='h-screen flex justify-center'>
      <div className='py-3 px-8 h-fit w-96 mt-20 bg-white rounded-xl shadow-xl'>
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

export default App;