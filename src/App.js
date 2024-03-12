import React from 'react';

import FormikForm from './formik-form';
import ReactHookForm from './react-hook-form';
import ReactFormHookControllerInput from './react-form-hook-controller-input';
import ReactFinalForm from './react-final-form';

// import './App.css';

function App() {
  return (
    <div>
      <FormikForm />
      <ReactHookForm />
      <ReactFormHookControllerInput />
      <ReactFinalForm />
    </div>
  );
}

export default App;
