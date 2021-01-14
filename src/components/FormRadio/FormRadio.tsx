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
  label?: string;
  type?: string;
  options?: IOptionType[] | undefined;
  required?: boolean;
  errorobj?: {
    message: string;
    type: string;
  };
  value?: any;
  disabled?: boolean;
}

// function MuiRadio(props: IFormRadioItem) {
//   const { label, options } = props;
//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend">{label}</FormLabel>
//       <RadioGroup row {...props}>
//         {options &&
//           options.map((item) => (
//             <FormControlLabel
//               key={item.value}
//               value={item.value}
//               control={<Radio />}
//               label={item.label}
//             />
//           ))}
//       </RadioGroup>
//     </FormControl>
//   );
// }

const MuiRadio = React.forwardRef((props: IFormRadioItem, ref: any) => {
  const { label, options } = props;
  return (
    <FormControl component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup row {...props} ref={ref}>
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
});

function FormRadio(props: IFormRadioItem) {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiRadio} control={control} defaultValue="" {...props} />
    </>
  );
}

export default FormRadio;
