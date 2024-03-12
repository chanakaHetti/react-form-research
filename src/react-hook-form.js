import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <h3>React Hook Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input defaultValue="" {...register('firstName', { required: true })} />
        {errors.firstName && <span>First Name is required</span>}

        <label htmlFor="lastName">Last Name</label>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span>Last Name is required</span>}

        <label htmlFor="age">Age</label>
        <input {...register('age', { required: true, pattern: /^[0-9]+$/i })} />
        <>
          {errors.age?.type === 'required' && 'Age is required'}
          {errors.age?.type === 'pattern' && 'Age should be a number'}
        </>

        <label htmlFor="email">Email</label>
        <input
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <>
          {errors.email?.type === 'required' && 'Email is required'}
          {errors.email?.type === 'pattern' && 'Invalid email address'}
        </>

        <input type="submit" />
      </form>
    </>
  );
};

export default ReactHookForm;
