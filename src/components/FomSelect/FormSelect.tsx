import { InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { IOptionType } from 'models/IOptionType';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormSelectItem {
  name: string;
  label: string;
  type?: string;
  options?: IOptionType[] | undefined;
  required?: boolean;
  errorobj?: {
    message: string;
    type: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

const MuiSelect = (props: IFormSelectItem) => {
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
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

const FormSelect = (props: IFormSelectItem): JSX.Element => {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiSelect} control={control} defaultValue="" {...props} />
    </>
  );
};

export default FormSelect;
