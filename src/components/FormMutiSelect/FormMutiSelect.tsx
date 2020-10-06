import { InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IMuiFormItem from 'models/IMuiFormItem';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const MuiSelect = (props: IMuiFormItem) => {
  const { label, name, options, required, errorobj } = props;

  let isError = false;
  let errorMessage = '';
  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }

  return (
    <FormControl fullWidth error={isError}>
      <InputLabel htmlFor={name}>
        {label}
        {required ? <span className="req-label">*</span> : null}
      </InputLabel>
      <Select {...props}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options &&
          options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.value}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

const FormSelect = (props: IMuiFormItem): JSX.Element => {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiSelect} control={control} defaultValue="" {...props} />
    </>
  );
};

export default FormSelect;
