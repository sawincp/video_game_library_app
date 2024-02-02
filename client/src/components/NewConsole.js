import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { consoleState } from '../state/atoms/ConsoleState';
import { Formik, Field, Form, resetForm } from 'formik';
import axios from 'axios';

function NewConsole() {
  const [consoles, setConsoles] = useRecoilState(consoleState);
  const navigate = useNavigate();

  console.log(consoles)
  return(
    <Formik
    initialValues={{platform: ''}}
    
    onSubmit={(values, {setSubmitting, resetForm})=>{
      setSubmitting(true)
      axios.post('/consoles', values)
      .then((res)=>{
        console.log(res.data)
        const updatedConsoles = [...consoles, res.data]
        setConsoles(updatedConsoles)
        setSubmitting(false)
        resetForm()
        navigate('/games')
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
    }}
    >
      <Form>
        <Field name='platform' type='text' placeholder="Enter New Console"></Field>
        <button type='submit'>Add Console</button>
      </Form>
    
    </Formik>

  )
}

export default NewConsole;