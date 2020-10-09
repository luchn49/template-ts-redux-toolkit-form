import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@material-ui/core';
import FormSelect from 'components/FomSelect/FormSelect';
import FormDatePicker from 'components/FormDatepicker/FormDatepicker';
import FormInput from 'components/FormInput/FormInput';
import FormAdvanceSelect from 'components/FormMutiSelect/FormAdvanceSelect';
import FormRadio from 'components/FormRadio/FormRadio';
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
});

const suggestions = [
  { value: '1', label: 'Technology' },
  { value: '2', label: 'Education' },
  { value: '3', label: 'Nature' },
  { value: '4', label: 'Animals' },
  { value: '5', label: 'Styles' },
];

const numberData = [
  { value: '1', label: 'Technology' },
  { value: '2', label: 'Education' },
  { value: '3', label: 'Nature' },
  { value: '4', label: 'Animals' },
  { value: '5', label: 'Styles' },
];

const radioGroupOptions = [
  {
    value: '1',
    label: 'Female',
  },
  {
    value: '2',
    label: 'Male',
  },
  {
    value: '3',
    label: 'Other',
  },
];

const PhotoForm = (): JSX.Element => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, errors } = methods;

  const onSubmit = (data: never) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div style={{ padding: '10px' }}>
      <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
        SUBMIT
      </Button>

      <div style={{ padding: '10px' }}>
        <FormProvider {...methods}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormInput name="title" label="Title" required errorobj={errors.title} />
              </Grid>
              <Grid item xs={12}>
                <FormSelect
                  name="category"
                  label="Category"
                  options={numberData}
                  required
                  errorobj={errors.category}
                />
              </Grid>
              <Grid item xs={12}>
                <FormDatePicker
                  typedatetime="DateTime"
                  name="txtDate"
                  label="Mui Date Validation"
                  required
                  errorobj={errors.txtDate}
                />
              </Grid>
              <Grid item xs={12}>
                <FormAdvanceSelect
                  name="txtCountry"
                  required
                  isMulti
                  placeholder="Search a country..."
                  options={suggestions}
                  errorobj={errors.txtCountry}
                />
              </Grid>
              <Grid item xs={12}>
                <FormRadio name="gender" label="Gender" options={radioGroupOptions} />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default PhotoForm;
