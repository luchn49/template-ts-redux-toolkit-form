import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import IMuiFormItem from 'models/IMuiFormItem';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const MuiRadio = (props: IMuiFormItem) => {
  const { label, options } = props;
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup row {...props}>
        {options &&
          options.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Radio />}
              label={item.value}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

const FormRadio = (props: IMuiFormItem): JSX.Element => {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiRadio} control={control} defaultValue="" {...props} />
    </>
  );
};

export default FormRadio;
