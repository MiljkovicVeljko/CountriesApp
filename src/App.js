import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from './containers/Countries';
import CountryDetails from './components/CountryDetails';
import { API_BASE_URL } from './shared/constants/http.constants';
import { GlobalStyles } from './styled/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styled/theme';
import { useDarkMode } from './shared/customHooks/useDarkMode';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [updatedCountries, setUpdatedCountries] = useState();

  useEffect(() => {
    axios(
      `${API_BASE_URL}all`
    ).then(response => setCountries(response.data));
  }, []);

  const handleSearchName = searchName => {
    if(searchName === '') {
      alert('please enter the name');
    } else {
      axios(
        `${API_BASE_URL}name/${searchName}`
      ).then(response => setUpdatedCountries(response.data))
      .catch(err => alert("There is no country with this name!"));
    }
  };

  const handleFilter = region => {
    const oldCountries = [...countries];
    let updContries = oldCountries.filter(country => country.region === region);
    if(region === "all") {
      setUpdatedCountries(oldCountries);
    } else {
      setUpdatedCountries(updContries);
    }
  }

  const Router = ({ toggleTheme }) => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (
          <Countries 
            countries={updatedCountries ? updatedCountries : countries} 
            handleSearchName={handleSearchName} 
            handleFilter={handleFilter} 
            toggleTheme={toggleTheme}
          />)} 
        />
        <Route exact path="/:id" render={() => <CountryDetails countries={countries} toggleTheme={toggleTheme} />} />
    </Switch>
  </BrowserRouter>
  );

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Router toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
