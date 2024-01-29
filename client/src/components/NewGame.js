import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik'; // Import Form component for error display
import { useRecoilState } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import Select from 'react-select';
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
      onSubmit={(values, { setSubmitting }) => {
        axios.post('/games',{
          title: values.title,
          coverArt: values.coverArt,
          releaseDate: values.releaseDate,
          notes: values.notes,
          consoleId: values.console_id, // Include consoleId directly
          genreId: values.genre_id, // Include genreId directly
        })
          .then((res) => {
            console.log(res)
            setGameList(res.data);
            setSubmitting(false);
            // Reset errors after successful submission
            setErrors(null);
          })
          .catch((error) => {
            setErrors(error.response.data.errors);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {/* Display errors if they exist */}
          {errors && <div className="error">{errors.message}</div>}

          <Field name="title" type="text" placeholder="Enter Game Title" />
          <Field name="cover_art" type="url" placeholder="Cover Art URL" />
          <Field name="release_date" type="date" placeholder="Release Date" />
          

          <Select
            options={consoles.map((console) => ({
            value: console.id, // Replace with appropriate value identifier
            label: console.platform, // Replace with appropriate label property
        }))}
            name="console_id"
            placeholder="Select Console"
       />
          <Select
            options={genres.map((genre) => ({
            value: genre.id, // Replace with appropriate value identifier
            label: genre.genre_type, // Replace with appropriate label property
         }))}
            name="genre_id"
            placeholder="Select Genre"
       />          
          
          <Field name="notes" type="text" placeholder="Notes" as="textarea" />

          <button type="submit" disabled={isSubmitting}>
            Add Game
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default NewGame;