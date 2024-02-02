import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { consoleState } from '../state/atoms/ConsoleState';
import { Formik, Field, Form, resetForm } from 'formik';
import axios from 'axios';

function NewConsole() {
  const [consoles, setConsoles] = useRecoilState(consoleState);
  const [newConsoleName, setNewConsoleName] = useState(''); // Use clear variable name

  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      await axios.post('/consoles', { platform: values.platform }); // Send only necessary data
      setSubmitting(false);
      resetForm();

      // Ensure consistency with Recoil state and avoid unnecessary state variable
      const updatedConsoles = [...consoles, values.platform]; // Use values.platform
      setConsoles(updatedConsoles);
    } catch (error) {
      console.error(error.response.data); // Log error for debugging
      // Handle errors appropriately (display error messages, etc.)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ platform: newConsoleName }} // Bind to correct state variable
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="platform" // Matches initialValues property
            type="text"
            placeholder="Enter New Console Name"
            value={newConsoleName}
            onChange={(e) => setNewConsoleName(e.target.value)}
          />
          <button type="submit" disabled={isSubmitting}>
            Create Console
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default NewConsole;