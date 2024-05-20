import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const Login = ({users}) => {

    const navigate = useNavigate();

    const validateLogin = Yup.object().shape({
        login : Yup.string().required('field is Requried '),
        password : Yup.string().required('field is Requried '),
    })

    const authorization = (value) => {

        let user = users.find((elem) => elem.login === value.login && elem.password === value.password)

        if(user) {
           return navigate('/profile', {state : user})
        }
        
    }
  return (
    <div>
       
        <Formik
            initialValues={{
                login : '',
                password : ''
            }}
            onSubmit={(values) => authorization(values)}
            validationSchema={validateLogin}
        >
            {
                () => (
                    <Form>
                         <h2>login page</h2>
                        <Field name='login' placeholder='login'/>
                        <ErrorMessage name='login' component='h5'/>
                        <Field name='password'  placeholder='password'/>
                        <ErrorMessage name='password' component='h5'/>
                        <button type='submit'>login</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}

export default Login