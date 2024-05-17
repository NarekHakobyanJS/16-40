import React from 'react'
import './OrderForm.css'
import {Formik, Field, Form} from 'formik'

const OrderForm = () => {
  return (
    <div>
        <h2>OrderForm</h2>
        <Formik
            initialValues={{
                name : '',
                lastName : '',
                phone : '',
                email : '',
                region : '',
                city : ''
            }}
            onSubmit={(values) => console.log(values)}
        >
            {
                ({values}) => (
                    <Form>
                        <Field name='name' type='input' placeholder='name'/>
                        <Field name='lastName' type='input' placeholder='lastname'/>
                        <Field name='phone' type='input' placeholder='phone'/>
                        <Field name='email' type='input' placeholder='email'/>
                        {/* region */}
                        <Field name='city' type='input' placeholder='city'/>
                        <button>send</button>
                    </Form>
                )   
            }
        </Formik>
    </div>
  )
}

export default OrderForm