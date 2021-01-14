/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { IOptionType } from 'models/IOptionType';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormAutocompleteProps {
  name: string;
  label?: string;
  required?: boolean;
  options: IOptionType[];
  errorobj?: {
    message: string;
    type: string;
  };
  classinput?: any;
  disabled?: boolean;
  defaultValue: any;
  multiple?: boolean;
  freeSolo?: boolean;
  rows?: number | string;
}

const MuiAutocomplete = React.forwardRef((props: IFormAutocompleteProps, ref: any) => {
  const { required, errorobj, classinput } = props;

  let isError = false;
  let errorMessage = '';
  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }

  return (
    <FormControl fullWidth size="medium">
      <Autocomplete
        id="tags-outlined"
        ref={ref}
        getOptionLabel={(option: IOptionType) => option.label}
        renderInput={() => (
          <TextField
            InputLabelProps={{
              className: required ? 'required-label' : '',
              required: required || false,
            }}
            className={classinput}
            variant="outlined"
            error={isError}
            helperText={errorMessage}
            ref={ref}
            {...props}
          />
        )}
        {...props}
      />
    </FormControl>
  );
});

function FormAutocomplete(props: IFormAutocompleteProps) {
  const { control } = useFormContext();

  return <Controller as={MuiAutocomplete} control={control} {...props} />;
}

export default FormAutocomplete;
