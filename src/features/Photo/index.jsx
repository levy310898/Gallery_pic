import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {useRouteMatch} from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import GalleryPage from './pages/YourGalleryPage/index';
import NotFound from 'components/NotFound';

export default function Index(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path = {match.url} component = {HomePage}/>
      <Route exact path={`${match.url}gallery`} component={GalleryPage} />
      <Route component={NotFound}/>
    </Switch>
  )
}
