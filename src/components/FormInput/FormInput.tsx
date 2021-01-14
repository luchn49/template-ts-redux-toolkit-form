import { FormControl, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormInputProps {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
  errorobj?: {
    message: string;
    type: string;
  };
  classinput?: any;
  disabled?: boolean;
  defaultValue: any;
  autoFocus?: boolean;
  multiline?: boolean;
  rows?: number | string;
}

// function MuiTextField(props: IFormInputProps) {
//   const { required, errorobj, classinput, type } = props;
//   let isError = false;
//   let errorMessage = '';
//   if (errorobj) {
//     isError = true;
//     errorMessage = errorobj.message;
//   }

//   return (
//     <FormControl fullWidth size="medium">
//       <TextField
//         InputLabelProps={{
//           className: required ? 'required-label' : '',
//           required: required || false,
//         }}
//         className={classinput}
//         variant="outlined"
//         error={isError}
//         helperText={errorMessage}
//         autoComplete={type}
//         {...props}
//       />
//     </FormControl>
//   );
// }

const MuiTextField = React.forwardRef((props: IFormInputProps, ref: any) => {
  const { required, errorobj, classinput, type } = props;
  let isError = false;
  let errorMessage = '';
  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }

  return (
    <FormControl fullWidth size="medium">
      <TextField
        InputLabelProps={{
          className: required ? 'required-label' : '',
          required: required || false,
        }}
        className={classinput}
        variant="outlined"
        error={isError}
        helperText={errorMessage}
        autoComplete={type}
        ref={ref}
        {...props}
      />
    </FormControl>
  );
});

function FormInput(props: IFormInputProps) {
  const { control } = useFormContext();

  return <Controller as={MuiTextField} control={control} {...props} />;
}

export default FormInput;
