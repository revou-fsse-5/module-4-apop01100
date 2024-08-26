import * as Yup from 'yup';

const today: Date = new Date();

const stepOneSchema = Yup.object({
    fullName: Yup.string().
        required("Please enter your name."),
    birth: Yup.date()
        .max(today, 'Invalid birth date.')
        .required('Please enter your birth date.'),
    email: Yup.string()
        .email('Invalid email format.')
        .required('Please enter your email.')
})

const stepTwoSchema = Yup.object({
    address: Yup.string().
        required("Please enter your street address."),
    city: Yup.string()
        .required('Please enter your city.'),
    state: Yup.string()
        .required('Please enter your state.'),
    zipCode: Yup.string()
        .matches(/^[0-9]{5}$/, 'Invalid Zip Code format.')
        .required('Please enter your zip code.')
})

const stepThreeSchema = Yup.object({
    username: Yup.string()
        .required('Please enter your username.'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain a lowercase letter.')
        .matches(/[A-Z]/, 'Password must contain an uppercase letter.')
        .matches(/[0-9]/, 'Password must contain a number.')
        .matches(/[!@#$%^&*]/, 'Password must contain a special character.')
        .required('Please enter your password.')
})

const addSchema = Yup.object({
    name: Yup.string()
        .required('Please enter the name.'),
    description: Yup.string()
        .required('Please enter the description.')
})

const updateSchema = Yup.object({
    name: Yup.string()
        .required('Please enter new name.'),
    description: Yup.string()
        .required('Please enter new description.')
})

const loginSchema = Yup.object({
    username: Yup.string()
        .required('Please enter your username.'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain a lowercase letter.')
        .matches(/[A-Z]/, 'Password must contain an uppercase letter.')
        .matches(/[0-9]/, 'Password must contain a number.')
        .matches(/[!@#$%^&*]/, 'Password must contain a special character.')
        .required('Please enter your password.')
})

export {
    stepOneSchema,
    stepTwoSchema,
    stepThreeSchema,
    addSchema,
    updateSchema,
    loginSchema
}