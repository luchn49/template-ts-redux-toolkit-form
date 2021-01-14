/* eslint-disable react/jsx-wrap-multilines */
import {
  Checkbox,
  createStyles,
  FormControl,
  FormHelperText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormCheckboxItem {
  name: string;
  label?: string;
  required?: boolean;
  checked?: boolean;
  errorobj?: {
    message: string;
    type: string;
  };
  defaultValue: any;
  onChange?: any;
  disabled?: boolean;
}

// function MuiCheckbox(props: IFormCheckboxItem) {
//   const { label, errorobj, onChange } = props;

//   const handleSelectedOptionChange = (event: any) => {
//     onChange(event.target.checked);
//   };

//   const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//       root: {
//         '& .MuiSvgIcon-root': {
//           color: errorobj
//             ? theme.palette.error.main
//             : theme.palette.text.primary,
//         },
//       },
//       label: {
//         fontSize: '.75rem',
//         color: errorobj ? theme.palette.error.main : theme.palette.text.primary,
//       },
//       errorMsg: {
//         color: theme.palette.error.main,
//         margin: '3px 14px 0',
//       },
//     })
//   );
//   const classes = useStyles();
//   return (
//     <FormControl>
//       <FormControlLabel
//         classes={{
//           label: classes.label,
//           root: classes.root,
//         }}
//         control={<Checkbox {...props} onChange={handleSelectedOptionChange} />}
//         label={label}
//       />
//       {errorobj && (
//         <FormHelperText className={classes.errorMsg}>
//           {errorobj.message}
//         </FormHelperText>
//       )}
//     </FormControl>
//   );
// }

const MuiCheckbox = React.forwardRef((props: IFormCheckboxItem, ref: any) => {
  const { label, errorobj, onChange } = props;

  const handleSelectedOptionChange = (event: any) => {
    onChange(event.target.checked);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& .MuiSvgIcon-root': {
          color: errorobj ? theme.palette.error.main : theme.palette.text.primary,
        },
      },
      label: {
        fontSize: '.75rem',
        color: errorobj ? theme.palette.error.main : theme.palette.text.primary,
      },
      errorMsg: {
        color: theme.palette.error.main,
        margin: '3px 14px 0',
      },
    })
  );
  const classes = useStyles();
  return (
    <FormControl>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.root,
        }}
        control={<Checkbox ref={ref} {...props} onChange={handleSelectedOptionChange} />}
        label={label && label}
      />
      {errorobj && <FormHelperText className={classes.errorMsg}>{errorobj.message}</FormHelperText>}
    </FormControl>
  );
});

function FormCheckbox(props: IFormCheckboxItem) {
  const { control } = useFormContext();
  return (
    <>
      <Controller as={MuiCheckbox} control={control} {...props} />
    </>
  );
}

export default FormCheckbox;
