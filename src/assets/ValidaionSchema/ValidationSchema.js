import * as Yup from 'yup';

export const validateOrder = Yup.object().shape({
    name: Yup.string().matches(/[A-Z]{1}[a-z]/, 'name no assign form validate').required('filed is requried'),
    lastName: Yup.string().matches(/[A-Z]{1}[a-z]/, 'lastName no assign form validate').required('filed is requried'),
    phone: Yup.string().matches(/[+][0-9]+-\d+-\d+-\d+-\d/g, 'hamare sxale').required('filed is requried'),
    email: Yup.string().email('invalid email').required('filed is requried'),
    region: Yup.string(),
    city: Yup.string().matches(/[^A-Z]{1}[a-z]/, 'city no assign form validate').required('filed is requried')
})


export const validateRegister = Yup.object().shape({
    name: Yup.string().matches(/[A-Z]{1}[a-z]/, 'name no assign form validate').required('filed is requried'),
    lastName: Yup.string().matches(/[A-Z]{1}[a-z]/, 'lastName no assign form validate').required('filed is requried'),
    phone: Yup.string().matches(/[+][0-9]+-\d+-\d+-\d+-\d/g, 'hamare sxale').required('filed is requried'),
    email: Yup.string().email('invalid email').required('filed is requried'),
    role: Yup.string().required('filed is requried'),
    password : Yup.string().required('filed is requried'),
    login : Yup.string().required('filed is requried')
})

export const validateLogin = Yup.object().shape({
    login: Yup.string().required('field is Requried '),
    password: Yup.string().required('field is Requried '),
}) 