import React, { useState } from 'react';
import { Formik, Field, Form, resetForm } from 'formik';
import { useRecoilState } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import axios from 'axios';

function NewGame({ consoles, genres }) {
  const [gameList, setGameList] = useRecoilState(gameListState);
  const [errors, setErrors] = useState(null);
  return (
    <Formik
      initialValues={{
        title: '',
        cover_art: '',
        release_date: '',
        notes: '',
        console_id: '',
        genre_id: '',
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        axios.post('/games',values)
          .then((res) => {
            console.log(res.data)
            const updatedGameList = [...gameList, res.data]
            setGameList(updatedGameList);
            setSubmitting(false);
            resetForm()
            setErrors(null);
          })
          .catch((error) => {
            setErrors(error.response.data.errors);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h1>{errors}</h1>
         
          <Field name="title" type="text" placeholder="Enter Game Title" />
          <Field name="cover_art" type="text" placeholder="Cover Art URL" />
          <Field name="release_date" type="date" placeholder="Release Date" />
          
          <Field
            as="select"
            name="console_id"
            type="number"
            placeholder="Choose Console"
          >
            {consoles.map((c) => (
              <option key={c.id} value={c.id}>
              {c.platform}
              </option>
            ))}
          </Field>
           
          <Field 
            as="select" 
            name="genre_id"
            type="number"
            placeholder="Choose Genre"
            >
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
              {g.genre_type}
              </option>
            ))}
          </Field>   
          <Field name="notes" type="text" placeholder="Notes" as="textarea" />
          <button type="submit" disabled={isSubmitting}>
            Add Game
          </button>
        </Form>
      )}
    </Formik>
  );

};

export default NewGame;