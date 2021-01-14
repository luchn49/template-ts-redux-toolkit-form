/* eslint-disable react/jsx-boolean-value */
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import FormAutocompleteAsync from 'components/FormAutocompleteAsync/FormAutocompleteAsync';
import { IOptionType } from 'models/IOptionType';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  // title: yup.string().required('Name is required'),
  // category: yup.string().required('Category is required'),
  // gender: yup.string(),
  // txtDate: yup
  //   .date()
  //   .required('Mui Date field is required')
  //   .typeError('Mui Date field must be a date')
  //   .nullable(),
  txtCountry: yup
    .object()
    .typeError('Country is required!')
    .shape({
      value: yup.string().required('Country is required'),
    }),
});

// const suggestions = [
//   { value: '1', label: 'Technology' },
//   { value: '2', label: 'Education' },
//   { value: '3', label: 'Nature' },
//   { value: '4', label: 'Animals' },
//   { value: '5', label: 'Styles' },
// ];

// const numberData = [
//   { value: '1', label: 'Technology' },
//   { value: '2', label: 'Education' },
//   { value: '3', label: 'Nature' },
//   { value: '4', label: 'Animals' },
//   { value: '5', label: 'Styles' },
// ];

// const radioGroupOptions = [
//   {
//     value: '1',
//     label: 'Female',
//   },
//   {
//     value: '2',
//     label: 'Male',
//   },
//   {
//     value: '3',
//     label: 'Other',
//   },
// ];

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const PhotoForm = (): JSX.Element => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, errors } = methods;

  const onSubmit = (data: never) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  // const [openDialogModal, toggleOpenDialogModal] = React.useState(false);

  // const handleClose = () => {
  //   setDialogValue('');
  //   toggleOpenDialogModal(false);
  // };

  // const [dialogValue, setDialogValue] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<IOptionType[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const res = await axios.get('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3);
      if (active) {
        setOptions(
          Object.keys(res.data).map((key) => {
            return {
              label: res.data[key].item[0].name,
              value: res.data[key].item[0].country,
            };
          }) as IOptionType[]
        );
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div style={{ padding: '10px' }}>
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        SUBMIT
      </button>

      <div style={{ padding: '10px' }}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12}>
                <FormInput
                  name="title"
                  label="Title"
                  required
                  errorobj={errors.title}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <FormSelect
                  name="category"
                  label="Category"
                  options={numberData}
                  required
                  errorobj={errors.category}
                  defaultValue=""
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <FormDatePicker
                  typedatetime="Date"
                  name="txtDate"
                  label="Mui Date Validation"
                  required
                  minDate={new Date('2018-03-01')}
                  clearable
                  disableFuture
                  errorobj={errors.txtDate}
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <FormAutocomplete
                  name="txtCountry"
                  label="Country"
                  required
                  freesolo={true}
                  isCreatable={true}
                  multiple={true}
                  placeholder="Search a country..."
                  defaultValue={[suggestions[0]]}
                  options={suggestions}
                  errorobj={errors.txtCountry}
                  handleSetDialogValue={setDialogValue}
                  handleToggleDialogModal={toggleOpenDialogModal}
                />
                <DialogModal
                  dialogValue={dialogValue}
                  handleClose={handleClose}
                  open={openDialogModal}
                />
              </Grid> */}
              <Grid item xs={12}>
                <FormAutocompleteAsync
                  name="txtCountry"
                  label="Country"
                  placeholder="Search a country..."
                  defaultValue={null}
                  options={options}
                  loading={loading}
                  onOpen={() => {
                    setOpen(true);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormRadio name="gender" label="Gender" options={radioGroupOptions} />
              </Grid> */}
            </Grid>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default PhotoForm;

// interface IDialogProps {
//   open: boolean;
//   handleClose: () => void;
//   dialogValue: any;
// }

// export const DialogModal = (props: IDialogProps) => {
//   const { open, handleClose, dialogValue } = props;
//   return (
//     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//       <DialogTitle id="form-dialog-title">Add a new film</DialogTitle>
//       <DialogContent>
//         <DialogContentText>Did you miss any film in our list? Please, add it!</DialogContentText>
//         <TextField
//           autoFocus
//           margin="dense"
//           id="name"
//           value={dialogValue}
//           // onChange={(event) => setDialogValue(event.target.value)}
//           label="title"
//           type="text"
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} color="primary">
//           Cancel
//         </Button>
//         <Button type="submit" color="primary">
//           Add
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };
