import React from 'react'
import './OrderForm.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

/// Regions

let region = ['Yerevan', 'Gexarqunik', "Syuniq", "Kotayq", "Armavir"]
const OrderForm = ({ allPrice }) => {

    const validate = Yup.object().shape({
        name: Yup.string().matches(/[A-Z]{1}[a-z]/, 'name no assign form validate').required('filed is requried'),
        lastName: Yup.string().matches(/[A-Z]{1}[a-z]/, 'lastName no assign form validate').required('filed is requried'),
        phone: Yup.string().matches(/[+][0-9]+-\d+-\d+-\d+-\d/g, 'hamare sxale').required('filed is requried'),
        email: Yup.string().email('invalid email').required('filed is requried'),
        region: Yup.string(),
        city: Yup.string().matches(/[^A-Z]{1}[a-z]/, 'city no assign form validate').required('filed is requried')
    })
    return (
        <div>
            <h2>OrderForm</h2>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    region: '',
                    city: ''
                }}
                validationSchema={validate}
                onSubmit={(values) => console.log(values)}
            >
                {
                    ({ isValid }) => (
                        <Form>
                            <Field name='name' type='input' placeholder='name' />
                            <ErrorMessage name='name' component='h5' />

                            <Field name='lastName' type='input' placeholder='lastname' />
                            <ErrorMessage name='lastName' component='h5' />

                            <Field name='phone' type='input' placeholder='phone' />
                            <ErrorMessage name='phone' component='h5' />

                            <Field name='email' type='input' placeholder='email' />
                            <ErrorMessage name='email' component='h5' />

                            <Field name='region' as='select'>
                                {
                                    region.map((reg) => <option value={reg}>{reg}</option>)
                                }
                            </Field>
                            <Field name='city' type='input' placeholder='city' />
                            <ErrorMessage name='city' component='h5' />
                            <button disabled={!isValid} type='submit'>send</button>
                        </Form>
                    )
                }
            </Formik>
            <h3>@ndhanur gumare --- {allPrice}$</h3>
        </div>
    )
}

export default OrderForm