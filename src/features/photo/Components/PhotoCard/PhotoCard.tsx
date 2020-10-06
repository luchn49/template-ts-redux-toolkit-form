import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IPhoto from 'models/IPhoto';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {
    height: 100,
  },
});

interface IPhotoCardProps {
  photo: IPhoto;
  removePhoto: (id: number) => void;
  editPhoto: (id: number) => void;
}

const PhotoCard = (props: IPhotoCardProps): JSX.Element => {
  const { photo, removePhoto, editPhoto } = props;
  const classes = useStyles();

  const handleClickRemove = () => {
    removePhoto(photo.id);
  };

  const handleClickEdit = () => {
    editPhoto(photo.id);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClickEdit}>
        <CardMedia className={classes.media} image={photo.photo} title={photo.title} />
        <CardContent>
          <Typography className={classes.title} gutterBottom component="h6">
            {photo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickEdit}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={handleClickRemove}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
