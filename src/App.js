import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from './shared/constants/http.constants';
import { GlobalStyles } from './styled/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styled/theme';
import { useDarkMode } from './shared/customHooks/useDarkMode';
import { Router } from './Router/Router';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, selectCountries } from './store/countriesSlice';

const App = () => {
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();
  const [updatedCountries, setUpdatedCountries] = useState();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  // console.log("rom", countries);

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
    if(region === "All") {
      setUpdatedCountries(oldCountries);
    } else {
      setUpdatedCountries(updContries);
    }
  }
  
  return (
    <ThemeProvider theme={themeMode}>
      <Router 
        toggleTheme={toggleTheme} 
        theme={theme} 
        handleFilter={handleFilter} 
        handleSearchName={handleSearchName} 
        updatedCountries={updatedCountries}
        countries={countries}
      />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
