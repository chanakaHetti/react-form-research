import { useState } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';

const ReactFormHookControllerInput = () => {
  //   const {
  //     field,
  //     fieldState: { invalid, isTouched, isDirty },
  //     formState: { touchedFields, dirtyFields },
  //   } = useController({
  //     name,
  //     control,
  //     rules: { required: true },
  //   });

  const initialData = {
    number: 100,
  };

  const { handleSubmit, reset, setValue, control } = useForm({
    defaultValues: initialData,
  });

  const [data, setData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
  };

  console.log('re-renders from controller hook');

  return (
    <>
      <h3>React Hook form with controller input</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="number"
          render={({ field }) => {
            return <input type="number" {...field} />;
          }}
        />

        <button className="button">submit Data</button>
        <button
          className="button buttonBlack"
          type="button"
          onClick={() => {
            console.log('reset hit');
            reset(initialData);
          }}
        >
          Reset Form
        </button>
      </form>
    </>
  );
};

export default ReactFormHookControllerInput;
