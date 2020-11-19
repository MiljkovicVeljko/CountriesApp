import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from './shared/constants/http.constants';
import { GlobalStyles } from './styled/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styled/theme';
import { Router } from './Router/Router';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, selectCountries } from './store/countriesSlice';
import { selectTheme } from './store/themeSlice';
import { filterCountries, selectUpdatedCountries } from './store/operationSlice';

const App = () => {
  const theme = useSelector(selectTheme);
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();
  const [updatedCountries, setUpdatedCountries] = useState();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    dispatch(getCountries());
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
    if(countries !== []) {
      dispatch(filterCountries({ countries, region }));

    }
  }
  
  return (
    <ThemeProvider theme={themeMode}>
      <Router 
        handleFilter={handleFilter} 
        handleSearchName={handleSearchName}
      />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
