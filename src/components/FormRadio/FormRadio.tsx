import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { IOptionType } from 'models/IOptionType';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormRadioItem {
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

const MuiRadio = (props: IFormRadioItem) => {
  const { label, options } = props;
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup row {...props}>
        {options &&
          options.map((item) => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

const FormRadio = (props: IFormRadioItem): JSX.Element => {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiRadio} control={control} defaultValue="" {...props} />
    </>
  );
};

export default FormRadio;
