import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IMuiFormItem from 'models/IMuiFormItem';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const MuiCheckbox = (props: IMuiFormItem) => {
  const { label } = props;
  return <FormControlLabel control={<Checkbox {...props} />} label={label} />;
};

interface IFormCheckboxProps {
  name: string;
  label: string;
}

const FormCheckbox = (props: IFormCheckboxProps): JSX.Element => {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiCheckbox} control={control} defaultValue={false} {...props} />
    </>
  );
};

export default FormCheckbox;
