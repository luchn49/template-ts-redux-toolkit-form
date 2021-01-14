/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { CircularProgress, FormControl, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { IOptionType } from 'models/IOptionType';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormAutocompleteAsyncProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: IOptionType[];
  value?: any;
  classinput?: any;
  defaultValue: any;
  loading: boolean;
  onChange?: any;
  style?: any;
  onOpen: () => void;
  onClose: () => void;
}

const MuiAutocompleteAsync = React.forwardRef((props: IFormAutocompleteAsyncProps, ref: any) => {
  const {
    onChange,
    options,
    loading,
    value,
    name,
    label,
    style,
    classinput,
    placeholder,
    onClose,
    onOpen,
  } = props;

  const handleOnChangeNewValue = (event: React.ChangeEvent<{}>, newValue: any) => {
    onChange(newValue);
  };

  return (
    <FormControl fullWidth size="medium">
      <Autocomplete
        options={options}
        getOptionLabel={(option) => {
          return option && option.label;
        }}
        onChange={handleOnChangeNewValue}
        selectOnFocus
        value={value}
        style={style}
        className={classinput}
        onClose={onClose}
        onOpen={onOpen}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              name={name}
              label={label}
              placeholder={placeholder}
              className={classinput}
              variant="outlined"
              ref={ref}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          );
        }}
      />
    </FormControl>
  );
});

function FormAutocompleteAsync(props: IFormAutocompleteAsyncProps) {
  const { control } = useFormContext();

  return <Controller as={MuiAutocompleteAsync} control={control} {...props} />;
}

export default FormAutocompleteAsync;
