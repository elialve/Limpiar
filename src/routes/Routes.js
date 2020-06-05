import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portafolio from '../components/Portafolio';
import NotFound from '../components/NotFound';

const AppRouter = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Portafolio} exact="true"/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
