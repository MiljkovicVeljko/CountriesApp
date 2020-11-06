import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from './containers/Countries';
import CountryDetails from './components/CountryDetails';
import { API_BASE_URL } from './shared/constants/http.constants';

const App = () => {
  // ROUTER GOES HERE
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios(
      `${API_BASE_URL}all`
    ).then(response => setCountries(response.data.slice(0, 10)));
  }, []);

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Countries countries={countries} />} />
          <Route exact path="/:id" render={() => <CountryDetails countries={countries} />} />
       </Switch>
    </BrowserRouter>
  );
}

export default App;
