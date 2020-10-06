import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@material-ui/core';
import FormSelect from 'components/FomSelect/FormSelect';
import FormDatePicker from 'components/FormDatepicker/FormDatepicker';
import FormInput from 'components/FormInput/FormInput';
import FormRadio from 'components/FormRadio/FormRadio';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  gender: yup.string(),
  txtDate: yup.date().required('Date is required'),
});

const PhotoForm = (): JSX.Element => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, errors } = methods;

  const onSubmit = () => {
    // console.log(data);
  };

  const numberData = [
    { id: '1', value: 'Technology' },
    { id: '2', value: 'Education' },
    { id: '3', value: 'Nature' },
    { id: '4', value: 'Animals' },
    { id: '5', value: 'Styles' },
  ];

  const radioGroupOptions = [
    { id: 'female', value: 'Female' },
    { id: 'male', value: 'Male' },
    { id: 'other', value: 'Other' },
  ];

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
                <FormDatePicker name="txtDate" label="Date" required errorobj={errors.txtDate} />
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
