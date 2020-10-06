import { CssBaseline } from '@material-ui/core';
import Header from 'components/Header/Header';
import 'normalize.css';
import 'features/app/App.scss';
import Photo from 'features/photo/Photo';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <CssBaseline>
      <div className="App">
        <Suspense fallback={<div>Loading ...</div>}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/photos" />
              <Route path="/photos" component={Photo} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    </CssBaseline>
  );
}

export default App;
