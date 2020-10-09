import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormCheckboxItem {
  name: string;
  label: string;
  errorobj?: {
    message: string;
    type: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

const MuiCheckbox = (props: IFormCheckboxItem) => {
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
