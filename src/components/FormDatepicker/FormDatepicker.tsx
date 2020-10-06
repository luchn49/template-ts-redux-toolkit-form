import DayUtils from "@date-io/dayjs";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import IMuiFormItem from "models/IMuiFormItem";
import React, { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

const MuiDatePicker = (props: IMuiFormItem): JSX.Element => {
  const { required, errorobj, value } = props;
  const ref = useRef(value)
  let isError = false;
  let errorMessage = "";
  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }

  const handleOnChange = () => {

  }

  return (
    <>
      <DatePicker
        format="DD-MM-YYYY"
        fullWidth={true}
        InputLabelProps={{
          className: required ? "required-label" : "",
          required: required || false,
        }}
        error={isError}
        helperText={errorMessage}
        {...props}
        value={value}
        onChange={handleOnChange}
        inputRef={ref}
      />
    </>
  );
};

const FormDatePicker = (props: IMuiFormItem): JSX.Element => {
  const { control } = useFormContext();
  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DayUtils}>
        <Controller
          as={MuiDatePicker}
          control={control}
          defaultValue={null}
          {...props}
        />
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}

export default FormDatePicker;
