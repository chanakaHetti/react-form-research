import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const FormikForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  };

  // Validation
  const validate = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = 'First Name is Required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is Required';
    }

    if (!values.age) {
      errors.age = 'Age is Required';
    } else if (!/^(0|[0-9][0-9]*)$/i.test(values.age)) {
      errors.age = 'Age should be a number';
    }

    if (!values.email) {
      errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  // handle submit
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <h3>Formik Form</h3>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />

            <label htmlFor="age">Age</label>
            <Field type="text" name="age" />
            <ErrorMessage name="age" component="div" />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikForm;
