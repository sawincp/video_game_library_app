import React, { useState } from 'react'
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/UserState';
// import {signupErrors} from '../state/atoms/SignUpErrorState'

const SignUpForm = () => {
    const [currentUser, setCurrentUser]= useRecoilState(userState)
    const [errors, setErrors] = useState([]);

    return(
    <Formik
    initialValues={{username: '', password: ''}}
    onSubmit={(values, {setSubmitting})=>{
        axios.post('/signup', values)
        .then((res)=>{
            setCurrentUser(res.data)
            setSubmitting(false)
        })
        .catch((error)=>{
            console.log(error.response.data.errors)
            setErrors(error.response.data.errors)
        })
    }}
    >
        <Form>
            <Field type='username' name='username' placeholder="Username"/>
            <p>{errors.username}</p>
            <Field type= 'password' name='password' placeholder= 'Password'/>
            <p> {errors.password}</p>
            <button type='submit'>Sign Up</button>
        </Form>
    </Formik>
    )
}

export default SignUpForm