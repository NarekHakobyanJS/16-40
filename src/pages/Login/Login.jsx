import React, { useContext } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validateLogin } from '../../assets/ValidaionSchema/ValidationSchema';
import { NavLink, useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';

const Login = () => {

    const { users } = useContext(MyContext)
    const navigate = useNavigate();

    const authorization = (value) => {

        let user = users.find((elem) => elem.login === value.login && elem.password === value.password)

        if (user) {
            return navigate('/profile', { state: user })
        } else {
            return navigate('/register')
        }

    }
    return (
        <div>

            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                onSubmit={(values) => authorization(values)}
                validationSchema={validateLogin}
            >
                {
                    () => (
                        <Form>
                            <h2>login page</h2>
                            <Field name='login' placeholder='login' />
                            <ErrorMessage name='login' component='h5' />
                            <Field name='password' placeholder='password' />
                            <ErrorMessage name='password' component='h5' />
                            <button type='submit'>login</button>
                        </Form>
                    )
                }
            </Formik>
            <NavLink to='/register'>register</NavLink>
        </div>
    )
}

export default Login