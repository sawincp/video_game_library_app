import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik'; // Import Form component for error display
import { useRecoilState } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import Select from 'react-select';
import axios from 'axios';

function NewGame({ consoles, genres }) {
  const [gameList, setGameList] = useRecoilState(gameListState);
  const [errors, setErrors] = useState(null);

  console.log("Console Data:", consoles)

// console.log(consoles)

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
        setSubmitting(true)
        axios.post('/games',values)
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
      {({ isSubmitting, handleChange }) => (
        <Form>
          {/* Display errors if they exist */}
          {errors && <div className="error">{errors.message}</div>}

          <Field name="title" type="text" placeholder="Enter Game Title" />
          <Field name="cover_art" type="text" placeholder="Cover Art URL" />
          <Field name="release_date" type="date" placeholder="Release Date" />
          
          <Field
            as="select"
            name="console_id"
            type="number"
            placeholder="Enter Console"
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
            placeholder="Enter Genre"
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

  // return (
  //   <Formik
  //     initialValues={{ selectedId: '' }} // Initialize selectedId with an empty string
  //     onSubmit={(values) => {
  //       console.log('Submitted values:', values); // This will now include the selectedId
  //     }}
  //   >
  //     {({ values }) => (
  //       <Form>
  //         {/* ... other form fields ... */}

  //         <Field as="select" name="selectedId">
  //           {/* Populate options from your data source */}
  //           <option value="">-- Select an option --</option>
  //           {consoles.map((c) => (
  //             <option key={c.id} value={c.id}>
  //               {c.value}
  //             </option>
  //           ))}
  //         </Field>

  //         <button type="submit">Submit</button>
  //       </Form>
  //     )}
  //   </Formik>
  // );
};

export default NewGame;