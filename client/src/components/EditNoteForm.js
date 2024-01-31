import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';

function EditNoteForm({ gameId }) {
  const gameList = useRecoilValue(gameListState);
  const setGameList = useSetRecoilState(gameListState);


  return (
    <Formik
      initialValues={{ notes: gameList.find((g) => g.id === gameId).notes }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios.patch(`/games/${gameId}`, { notes: values.notes })
          .then((res) => {
            // Update gameList state
            setGameList((currentGameList) =>
              currentGameList.map((g) => (g.id === gameId ? res.data : g))
            );
            setSubmitting(false);
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
            setSubmitting(false)
            resetForm();
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="notes" />
          <button type="submit" disabled={isSubmitting}>
            Update Notes
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default EditNoteForm