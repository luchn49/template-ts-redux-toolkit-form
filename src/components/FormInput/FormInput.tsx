import { FormControl, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormInputProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  errorobj?: {
    message: string;
    type: string;
  };
  value?: string;
}

const MuiTextField = (props: IFormInputProps): JSX.Element => {
  const { required, errorobj } = props;

  let isError = false;
  let errorMessage = '';
  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }

  return (
    <FormControl fullWidth>
      <TextField
        fullWidth
        InputLabelProps={{
          className: required ? 'required-label' : '',
          required: required || false,
        }}
        error={isError}
        helperText={errorMessage}
        {...props}
      />
    </FormControl>
  );
};

const FormInput = (props: IFormInputProps): JSX.Element => {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiTextField} control={control} defaultValue="" {...props} />
    </>
  );
};

export default FormInput;
