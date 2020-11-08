import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from '../containers/Countries';
import CountryDetails from '../containers/CountryDetails';

export const Router = ({ toggleTheme, theme, handleFilter, handleSearchName, updatedCountries, countries }) => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (
          <Countries 
            countries={updatedCountries ? updatedCountries : countries} 
            handleSearchName={handleSearchName} 
            handleFilter={handleFilter} 
            toggleTheme={toggleTheme}
            theme={theme}
          />)} 
        />
        <Route exact path="/:id" render={() => (
          <CountryDetails 
            countries={countries} 
            toggleTheme={toggleTheme} 
            theme={theme}
          />
        )} />
      </Switch>
    </BrowserRouter>
);