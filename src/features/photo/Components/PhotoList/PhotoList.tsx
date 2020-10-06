import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PhotoCard from 'features/photo/Components/PhotoCard/PhotoCard';
import IPhoto from 'models/IPhoto';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

interface IPhotoListProps {
  photoList: IPhoto[];
  removePhoto(id: number): void;
  editPhoto(id: number): void;
}

const PhotoList = (props: IPhotoListProps): JSX.Element => {
  const classes = useStyles();
  const { photoList, removePhoto, editPhoto } = props;

  const renderListPhotoCard = () => {
    return photoList.map(
      (photo: IPhoto): JSX.Element => {
        return (
          <Grid item xs={6} sm={3} key={photo.id}>
            <PhotoCard photo={photo} editPhoto={editPhoto} removePhoto={removePhoto} />
          </Grid>
        );
      }
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {renderListPhotoCard()}
      </Grid>
    </div>
  );
};

export default PhotoList;
