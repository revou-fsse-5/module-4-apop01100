export interface StepOneForm {
    fullName: string
    birth: string
    email: string
}

export interface StepTwoForm {
    address: string
    city: string
    state: string
    zipCode: string
}

export interface StepThreeForm {
    username: string
    password: string
}

export type FormData = StepOneForm & StepTwoForm & StepThreeForm