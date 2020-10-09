/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { FormControl, FormHelperText } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const AdvanceSelectItem = (props: any): JSX.Element => {
  const { name, value, options, errorobj, onChange } = props;
  const selectedOption = options.find((option: any) => option.value === value);

  // eslint-disable-next-line no-shadow
  const handleSelectedOptionChange = (selectedOptions: any) => {
    console.log(selectedOptions);
    if (selectedOptions.length <= 0) {
      return;
    }
    const changeEvent = {
      name,
      value: selectedOptions.map((item: any) => item.value),
    };
    onChange(changeEvent);
  };
  let isError = false;
  let errorMessage = '';
  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }

  return (
    <FormControl fullWidth error={isError}>
      <Select
        {...props}
        id={name}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        options={options}
        className={isError ? 'is-invalid' : ''}
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormAdvanceSelect = (props: any): JSX.Element => {
  const { control } = useFormContext();
  const { name, label } = props;
  return (
    <>
      <Controller
        {...props}
        as={AdvanceSelectItem}
        name={name}
        control={control}
        label={label}
        defaultValue={null}
      />
    </>
  );
};

export default FormAdvanceSelect;
