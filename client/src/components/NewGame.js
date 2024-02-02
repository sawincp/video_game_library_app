import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Field, Form, resetForm } from 'formik';
import { useRecoilState, useRecoilValue } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import { userState } from '../state/atoms/UserState';
import { consoleState } from '../state/atoms/ConsoleState';

import axios from 'axios';
import NewConsole from './NewConsole';

function NewGame({ genres }) {
  const [gameList, setGameList] = useRecoilState(gameListState);
  const [currentUser, setCurrentUser]= useRecoilState(userState)
  const consoles = useRecoilValue(consoleState)
  
  const [errors, setErrors] = useState(null);

  console.log(gameList) 

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
            console.log(error.response.data)
            setErrors(error.response.data.errors)
            setSubmitting(true);
          });

      }}
    >
      
        <Form>     
          <Field name="title" type="text" placeholder="Enter Game Title" />
          {errors && errors.includes("Title can't be blank") && <p className="error">Title can't be blank</p>}
          
          <Field name="cover_art" type="url" placeholder="Cover Art URL" />                    
          {errors && errors.includes("Cover art can't be blank") && <p className="error">Cover art can't be blank</p>}

          <label htmlFor="release_date">Release Date:</label>
          <Field
            name="release_date"
            type="date"
            placeholder="Release Date"
            id="release_date" 
          />
          {errors && errors.includes("Release date can't be blank") && <p className="error">Release date can't be blank</p>}


          <Field
            as="select"
            name="console_id"
            type="number"
          >
            {consoles.map((c) => (
              <option key={c.id} value={c.id}>
                {c.platform}
              </option>
            ))}
          </Field>
          {errors && errors.includes("Console must exist") && <p className="error">Console must exist</p>}
            <Link to='/consoles/new'>Add New Console</Link>
          
          <Field 
            as="select" 
            name="genre_id"
            type="number"
            >
           {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.genre_type}
              </option>
            ))}
          </Field>
          {errors && errors.includes("Genre must exist") && <p className="error">Genre must exist</p>}
          <Link to='/genres/new'>Add New Genre</Link>
          
          <Field name="notes" type="text" placeholder="Notes" as="textarea" />
          <button type="submit">
            Add Game
          </button>
        </Form>

    </Formik>
  );

};

export default NewGame;