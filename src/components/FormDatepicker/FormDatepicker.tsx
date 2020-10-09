/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import DayjsUtils from '@date-io/dayjs';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MuiDatePicker = (props: any): JSX.Element => {
  const { required, errorobj, typedatetime } = props;
  let isError = false;
  let errorMessage = '';

  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }
  const renderDateTimeInput = () => {
    switch (typedatetime) {
      case 'DateTime':
        return (
          <KeyboardDateTimePicker
            {...props}
            fullWidth
            format="DD-MM-YYYY HH:mm"
            InputLabelProps={{
              className: required ? 'required-label' : '',
              required: required || false,
            }}
            error={isError}
            helperText={errorMessage}
          />
        );
      case 'Date':
        return (
          <KeyboardDatePicker
            {...props}
            fullWidth
            format="DD-MM-YYYY"
            InputLabelProps={{
              className: required ? 'required-label' : '',
              required: required || false,
            }}
            error={isError}
            helperText={errorMessage}
          />
        );
      default:
        return (
          <KeyboardTimePicker
            {...props}
            fullWidth
            format="HH:mm"
            InputLabelProps={{
              className: required ? 'required-label' : '',
              required: required || false,
            }}
            error={isError}
            helperText={errorMessage}
          />
        );
    }
  };
  return <>{renderDateTimeInput()}</>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormDatePicker = (props: any): JSX.Element => {
  const { control } = useFormContext();
  const { name, label } = props;
  return (
    <>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <Controller
          {...props}
          as={MuiDatePicker}
          name={name}
          control={control}
          label={label}
          defaultValue={null}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default FormDatePicker;
