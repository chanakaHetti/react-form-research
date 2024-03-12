import React from 'react';

import { Form, Field } from 'react-final-form';

const ReactFinalForm = () => {
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <h3>React Final Form</h3>

      <Form
        onSubmit={onSubmit}
        initialValues={{ firstName: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = 'Required';
          }

          if (!values.lastName) {
            errors.lastName = 'Required';
          }

          if (!values.age) {
            errors.age = 'Age is Required';
          } else if (!/^(0|[0-9][0-9]*)$/i.test(values.age)) {
            errors.age = 'Age should be a number';
          }

          if (!values.email) {
            errors.email = 'Email is Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName">
              {({ input, meta }) => (
                <div>
                  <label>First Name</label>
                  <input {...input} type="text" placeholder="First Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="lastName">
              {({ input, meta }) => (
                <div>
                  <label>Last Name</label>
                  <input {...input} type="text" placeholder="Last Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="age">
              {({ input, meta }) => (
                <div>
                  <label>Age</label>
                  <input {...input} type="text" placeholder="Age" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <label>Email</label>
                  <input {...input} type="text" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
          </form>
        )}
      />
    </>
  );
};

export default ReactFinalForm;
