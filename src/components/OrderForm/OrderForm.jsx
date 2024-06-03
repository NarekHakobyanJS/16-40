import React, { useContext } from 'react'
import './OrderForm.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { validateOrder } from '../../assets/ValidaionSchema/ValidationSchema';
import MyContext from '../../MyContext';

/// Regions

let region = ['Yerevan', 'Gexarqunik', "Syuniq", "Kotayq", "Armavir"]
const OrderForm = () => {

    const {allPrice} = useContext(MyContext)
   

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
                validationSchema={validateOrder}
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