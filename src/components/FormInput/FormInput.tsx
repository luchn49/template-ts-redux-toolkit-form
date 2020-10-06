import { FormControl, TextField } from '@material-ui/core';
import IMuiFormItem from 'models/IMuiFormItem';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const MuiTextField = (props: IMuiFormItem): JSX.Element => {
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
        fullWidth={true}
        InputLabelProps={{
          className: required ? "required-label" : "",
          required: required || false,
        }}
        error={isError}
        helperText={errorMessage}
        {...props}
      />
    </FormControl>
  )
};

const FormInput = (props: IMuiFormItem): JSX.Element => {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiTextField} control={control} defaultValue="" {...props} />
    </>
  );
};

export default FormInput;
