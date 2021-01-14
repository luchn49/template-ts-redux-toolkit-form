/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, TextField } from '@material-ui/core';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { IOptionType } from 'models/IOptionType';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormAutocompleteProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options: IOptionType[];
  value?: any;
  errorobj?: {
    message: string;
    type: string;
  };
  classinput?: any;
  disabled?: boolean;
  defaultValue: any;
  multiple?: boolean;
  freesolo?: boolean;
  onChange?: any;
  isCreatable?: boolean;
  limitTags?: number;
  style?: any;
  handleToggleDialogModal: (value: boolean) => void;
  handleSetDialogValue: (data: any) => void;
}

const filter = createFilterOptions<IOptionType>();

const MuiAutocomplete = React.forwardRef((props: IFormAutocompleteProps, ref: any) => {
  const {
    required,
    errorobj,
    onChange,
    options,
    freesolo,
    multiple,
    value,
    isCreatable,
    name,
    label,
    limitTags,
    style,
    classinput,
    handleSetDialogValue,
    handleToggleDialogModal,
  } = props;

  let isError = false;
  let errorMessage = '';
  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }

  const handleOnChangeNewValue = (event: React.ChangeEvent<{}>, newValue: any) => {
    if (Array.isArray(newValue)) {
      const valueLength = newValue.length;
      const lastItem = newValue[valueLength - 1];
      if (typeof lastItem === 'string' && isCreatable) {
        handleToggleDialogModal(true);
        handleSetDialogValue(lastItem);
      } else if (lastItem && !lastItem.value && isCreatable) {
        const idxNewVal = newValue.findIndex((item: IOptionType) => item.label === lastItem);
        if (idxNewVal === -1) {
          handleToggleDialogModal(true);
          handleSetDialogValue(lastItem.label);
        }
      } else {
        onChange(newValue);
      }
    } else if (typeof newValue === 'string') {
      onChange({ label: newValue, value: null });
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      onChange({ label: newValue.inputValue, value: null });
    } else {
      onChange(newValue);
    }
  };

  return (
    <FormControl fullWidth size="medium">
      <Autocomplete
        options={options}
        getOptionLabel={(option) => {
          return option && option.label;
        }}
        filterOptions={(options: IOptionType[], params) => {
          const filtered = filter(options, params);
          if (params.inputValue !== '' && isCreatable) {
            filtered.push({
              value: '',
              label: `Create "${params.inputValue}"`,
            });
          }
          return filtered;
        }}
        onChange={handleOnChangeNewValue}
        selectOnFocus
        filterSelectedOptions
        freeSolo={!!freesolo}
        multiple={!!multiple}
        limitTags={limitTags}
        value={value}
        style={style}
        className={classinput}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              InputLabelProps={{
                className: required ? 'required-label' : '',
                required: required || false,
              }}
              name={name}
              label={label}
              className={classinput}
              variant="outlined"
              error={isError}
              helperText={errorMessage}
              ref={ref}
            />
          );
        }}
      />
    </FormControl>
  );
});

function FormAutocomplete(props: IFormAutocompleteProps) {
  const { control } = useFormContext();

  return <Controller as={MuiAutocomplete} control={control} {...props} />;
}

export default FormAutocomplete;
