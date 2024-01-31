import React, { useState } from 'react';
import { Formik, Field, Form, resetForm } from 'formik';
import { useRecoilState } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import { userState } from '../state/atoms/UserState';
import axios from 'axios';

function NewGame({ consoles, genres }) {
  const [gameList, setGameList] = useRecoilState(gameListState);
  const [currentUser, setCurrentUser]= useRecoilState(userState)
  
  const [errors, setErrors] = useState(null);

  const consolesWithPlaceholder = [
    { id: null, platform: "Choose Console" },
    ...consoles,
  ];

  const genresWithPlaceholder = [
    { id: null, genre_type: "Choose Genre" },
    ...genres,
  ];
  
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
        values.title = values.title.toUpperCase()
        setSubmitting(true)
        axios.post('/games',values)
          .then((res) => {
            console.log(res.data)
            setCurrentUser(res.data.user) 
            const updatedGameList = [...gameList, res.data]
            setGameList(updatedGameList);
            setSubmitting(false);
            resetForm()
            setErrors(null);
          })
          .catch((error) => {
            setErrors(error.response.data.errors)
            setSubmitting(true);
          });
      }}
    >
        <Form>
          <h1>{errors}</h1>
         
          <Field name="title" type="text" placeholder="Enter Game Title" />
          <Field name="cover_art" type="text" placeholder="Cover Art URL" />          
          
          <label htmlFor="release_date">Release Date:</label>
          <Field
            name="release_date"
            type="date"
            placeholder="Release Date"
            id="release_date" 
          />

          <Field
            as="select"
            name="console_id"
            type="number"
          >
            {consolesWithPlaceholder.map((c) => (
              <option key={c.id} value={c.id}>
                {c.platform}
              </option>
            ))}
          </Field>
           
          <Field 
            as="select" 
            name="genre_id"
            type="number"
            >
           {genresWithPlaceholder.map((g) => (
              <option key={g.id} value={g.id}>
                {g.genre_type}
              </option>
            ))}
          </Field>   
          <Field name="notes" type="text" placeholder="Notes" as="textarea" />
          <button type="submit">
            Add Game
          </button>
        </Form>

    </Formik>
  );

};

export default NewGame;