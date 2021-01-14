import { InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { IOptionType } from 'models/IOptionType';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormSelectItem {
  name: string;
  label?: string;
  type?: string;
  options?: IOptionType[] | undefined;
  required?: boolean;
  classselect?: any;
  errorobj?: {
    message: string;
    type: string;
  };
  value?: any;
  disabled?: boolean;
  defaultValue: any;
}

// function MuiSelect(props: IFormSelectItem) {
//   const { label, name, options, required, errorobj, classselect } = props;
//   let isError = false;
//   let errorMessage = '';
//   if (errorobj) {
//     isError = true;
//     errorMessage = errorobj.message;
//   }

//   return (
//     <FormControl error={isError} variant="outlined" style={{ width: '100%' }}>
//       <InputLabel htmlFor={name}>
//         {label}
//         {required ? <span className="req-label"> *</span> : null}
//       </InputLabel>
//       <Select className={classselect} {...props}>
//         {options &&
//           options.map((item) => (
//             <MenuItem key={item.value} value={item.value}>
//               {item.label}
//             </MenuItem>
//           ))}
//       </Select>
//       <FormHelperText>{errorMessage}</FormHelperText>
//     </FormControl>
//   );
// }

const MuiSelect = React.forwardRef((props: IFormSelectItem, ref: any) => {
  const { label, name, options, required, errorobj, classselect } = props;
  let isError = false;
  let errorMessage = '';
  if (errorobj) {
    isError = true;
    errorMessage = errorobj.message;
  }

  return (
    <FormControl error={isError} variant="outlined" style={{ width: '100%' }}>
      {label && (
        <InputLabel htmlFor={name}>
          {label}
          {required ? <span className="req-label"> *</span> : null}
        </InputLabel>
      )}
      <Select className={classselect} ref={ref} {...props}>
        {options &&
          options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
});

function FormSelect(props: IFormSelectItem) {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiSelect} control={control} {...props} />
    </>
  );
}

export default FormSelect;
