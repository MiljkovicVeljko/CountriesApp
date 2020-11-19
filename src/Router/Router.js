import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from '../containers/Countries';
import CountryDetails from '../containers/CountryDetails';

export const Router = ({ handleFilter, handleSearchName }) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => (
        <Countries
          handleSearchName={handleSearchName} 
          handleFilter={handleFilter}
        />)} 
      />
      <Route exact path="/:id" render={() => (
        <CountryDetails />
      )} />
    </Switch>
  </BrowserRouter>
);

