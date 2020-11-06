import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CountryInfo from './CountryInfo';

const Wrapper = styled.div`
  display: inline-block;
  background: #eee;
  border: 1px solid #ccc;
  width: 300px;
  max-height: 400px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100px;
  height: 50px;
`;

const CountryDetails = ({ countries }) => {
    const [country, setCountry] = useState();
    let history = useHistory();
    const { id } = useParams();
    
    useEffect(() => {
        const findCountry = countries.find(country => country.alpha3Code === id);
        setCountry(findCountry);
        console.log(countries);
    }, []);
    
    const handleBack = () => history.goBack();
    
    let showCountry = false;
    
    if (country) {
        showCountry = true;
    }

    return (showCountry ? 
            <Wrapper key={country.name}>
                <Img src={country.flag} alt="Country flag"/>
                <h3>{country.name}</h3>
                <CountryInfo capital={country.capital} subregion={country.subregion} population={country.population} />
                <button onClick={handleBack}>Back</button>
            </Wrapper> : <p>loading...</p>
    );
}


export default CountryDetails;