import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Banner from 'components/Banner/Banner';
import PhotoList from 'features/photo/Components/PhotoList/PhotoList';
import { removePhoto } from 'features/photo/PhotoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';

const MainPhotoPage = (): JSX.Element => {
  const photoList = useSelector((state: RootState) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoRemoveClick = (photoId: number) => {
    const action = removePhoto(photoId);
    dispatch(action);
  };

  const handlePhotoEditClick = (photoId: number) => {
    const editPhotoUrl = `/photos/${photoId}`;
    history.push(editPhotoUrl);
  };

  return (
    <>
      <Banner title="List photos" />
      <Container maxWidth="lg">
        <Link to="/photos/add">
          <Button variant="contained" color="primary" style={{ margin: '1rem' }}>
            Add new photo
          </Button>
        </Link>
        <PhotoList
          photoList={photoList}
          removePhoto={handlePhotoRemoveClick}
          editPhoto={handlePhotoEditClick}
        />
      </Container>
    </>
  );
};

export default MainPhotoPage;
