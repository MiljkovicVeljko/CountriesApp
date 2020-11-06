import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Img, Wrapper } from '../shared/utils/styled';
import CountryInfo from './CountryInfo';

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
            <Wrapper key={country.alpha3Code}>
                <Img src={country.flag} alt="Country flag"/>
                <h3>{country.name}</h3>
                <CountryInfo capital={country.capital} subregion={country.subregion} population={country.population} borders={country.borders} />
                <button onClick={handleBack}>Back</button>
            </Wrapper> : <p>loading...</p>
    );
}


export default CountryDetails;