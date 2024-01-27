import React from 'react'
import axios from 'axios';
import {Formik, Form, Field} from 'formik'
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/UserState';
import {signupErrors} from '../state/atoms/SignUpErrorState'

const SignUpForm = () => {
    const [currentUser, setCurrentUser]= useRecoilState(userState)
    const [errors, setErrors] = useRecoilState(signupErrors);

    return(
        <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={(values, {setSubmitting})=>{
            axios.post('/signup', values)
            .then((res)=>{
                setCurrentUser(res.data)
                setSubmitting(false)
                setErrors(null)
            })
            .catch((error)=>{
                console.log(error.response.data.errors)
                setErrors(error)
            })
        }}
        >
            {({isSubmitting})=>(
                <Form>
                    <Field type='username' name='username' placeholder="Username"/>
                    <Field type= 'password' name='password' placeholder= 'Password'/>
                    <button type='submit' disabled={isSubmitting}>
                        Sign Up
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default SignUpForm