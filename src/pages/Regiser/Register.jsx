import React, { useContext } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { validateRegister } from '../../assets/ValidaionSchema/ValidationSchema'
import MyContext from '../../MyContext'

import './Register.css'

const Register = () => {

    const { addUsers } = useContext(MyContext)
    const navigate = useNavigate();

    const goToProfile = (values) => {
        addUsers(values);
        navigate('/profile', { state: values })

    }


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
                validationSchema={validateRegister}
            >
                {
                    () => (
                        <Form>
                            <Field name='name' placeholder="name" />
                            <ErrorMessage name="name" component='h5' />
                            <Field name='lastName' placeholder='lastName' />
                            <ErrorMessage name="lastName" component='h5' />
                            <Field name='email' placeholder='email' />
                            <ErrorMessage name="email" component='h5' />
                            <Field name='phone' placeholder='phone' />
                            <ErrorMessage name="phone" component='h5' />
                            <Field name='password' placeholder='password' />
                            <ErrorMessage name="password" component='h5' />
                            <Field name='login' placeholder='login' />
                            <ErrorMessage name="login" component='h5' />
                            <label>
                                <ErrorMessage name="role" component='h5' />
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