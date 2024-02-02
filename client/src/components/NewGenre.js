import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {genreState} from '../state/atoms/GenreState'
import { Formik, Field, Form, resetForm } from 'formik';
import axios from 'axios';

function NewGenre() {
    const [genres, setGenre]= useRecoilState(genreState)
    const navigate = useNavigate();
  
    return (
        <Formik
        initialValues={{genre_type: ''}}
        onSubmit={(values, {setSubmitting, resetForm})=>{
            setSubmitting(true)
            axios.post('/genres', values)
            .then((res)=>{
                console.log(res.data)
                const updatedGenres = [...genres, res.data]
                setGenre(updatedGenres)
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
                <Field name='genre_type' type='text' placeholder="Enter New Genre"></Field>
                <button type='submit'>Add Genre</button>
                </Form>
        </Formik>
  )
}

export default NewGenre