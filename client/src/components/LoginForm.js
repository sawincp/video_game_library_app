import React from 'react'
import axios from 'axios';
import {Formik, Form, Field} from 'formik'
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/UserState';
import { loginErrors } from '../state/atoms/LoginErrorState';


function LoginForm() {
    const [currentUser, setCurrentUser] = useRecoilState(userState);
    const [errors, setErrors] = useRecoilState(loginErrors);
  
    return (
        <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('/login', values)
            .then((res) => {
              setCurrentUser(res.data);
              setSubmitting(false);
              setErrors(null); // Clear errors on success
            })
            .catch((error) => {
                // console.log(error.response.data.errors)
                setErrors(error.response.data.errors)
            });
        }}
      >
        {/* {({ isSubmitting }) => (
          <Form>
            <Field type="username" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Password" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            <h1>{errors}</h1>
          </Form>
        )} */}
           <Form>
            <Field type="username" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Password" />
            <button type="submit" >Log In</button>
            <h1>{errors}</h1>
          </Form>
      </Formik>
    );
  }

  export default LoginForm