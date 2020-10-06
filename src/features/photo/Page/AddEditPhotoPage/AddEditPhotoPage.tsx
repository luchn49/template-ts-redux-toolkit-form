import { Container } from '@material-ui/core';
import Banner from 'components/Banner/Banner';
import ImagesConstant from 'constants/Images';
import PhotoForm from 'features/photo/Components/PhotoForm/PhotoForm';
import React from 'react';

const AddEditPhotoPage = (): JSX.Element => {
  return (
    <>
      <Banner title="Pick your amazing photo 😎" backgroundUrl={ImagesConstant.ORANGE_BG} />

      <Container maxWidth="sm">
        <PhotoForm />
      </Container>
    </>
  );
};

export default AddEditPhotoPage;
