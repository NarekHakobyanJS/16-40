import React from 'react'
import './Register.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Register = ({addUsers}) => {
    const navigate = useNavigate();

    const goToProfile = (values) => {
        addUsers(values);
        navigate('/profile', {state : values})

    }
    const validate = Yup.object().shape({
        name: Yup.string().matches(/[A-Z]{1}[a-z]/, 'name no assign form validate').required('filed is requried'),
        lastName: Yup.string().matches(/[A-Z]{1}[a-z]/, 'lastName no assign form validate').required('filed is requried'),
        phone: Yup.string().matches(/[+][0-9]+-\d+-\d+-\d+-\d/g, 'hamare sxale').required('filed is requried'),
        email: Yup.string().email('invalid email').required('filed is requried'),
        role: Yup.string().required('filed is requried'),
        password : Yup.string().required('filed is requried'),
        login : Yup.string().required('filed is requried')
    })

    return (
        <div>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    login: '',
                    role: '',
                    password: '',

                }}
                onSubmit={(values) => goToProfile(values)}
                validationSchema={validate}
            >
                {
                    () => (
                        <Form>
                            <Field name='name' placeholder="name" />
                            <ErrorMessage name="name" component='h5'/>
                            <Field name='lastName' placeholder='lastName' />
                            <ErrorMessage name="lastName" component='h5'/>
                            <Field name='email' placeholder='email' />
                            <ErrorMessage name="email" component='h5'/>
                            <Field name='phone' placeholder='phone' />
                            <ErrorMessage name="phone" component='h5'/>
                            <Field name='password' placeholder='password' />
                            <ErrorMessage name="password" component='h5'/>
                            <Field name='login' placeholder='login' />
                            <ErrorMessage name="login" component='h5'/>
                            <label>
                            <ErrorMessage name="role" component='h5'/>
                                <Field type="radio" name="role" value="user" />
                                    user
                            </label>
                            <label>
                                <Field type="radio" name="role" value="admin" />
                                    admin
                            </label>
                            <button type='submit'>Register</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Register