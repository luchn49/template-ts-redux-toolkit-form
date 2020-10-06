import NotFound from 'components/NotFound/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPhotoPage from './Page/AddEditPhotoPage/AddEditPhotoPage';
import MainPhotoPage from './Page/MainPhotoPage/MainPhotoPage';

const Photo = (): JSX.Element => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainPhotoPage} />

      <Route path={`${match.url}/add`} component={AddEditPhotoPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPhotoPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Photo;
