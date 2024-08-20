import React, { ReactElement, useState } from 'react'

function useMultipleForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  const next = (): void => {
    setCurrentStep(index => {
        if (index >= steps.length - 1) return index
        return index + 1
    })
  }
  
  const back = (): void => {
    setCurrentStep(index => {
        if (index <= 0) return index
        return index - 1
    })
  }

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    next,
    back
  }
}

export default useMultipleForm