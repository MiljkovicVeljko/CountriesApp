import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMode } from '../shared/helpers/helpers';
import { Img, Btn, Title, NavBtn, Card, Circle, InnerCircle, InfoDetail, Details } from '../styled/styled';
import CountryInfo from '../components/CountryInfo';
import { useDarkMode } from '../shared/customHooks/useDarkMode';
import { useSelector } from 'react-redux';
import { selectCountries } from '../store/countriesSlice';

const CountryDetails = () => {
    const countries = useSelector(selectCountries);
    const [theme, toggleTheme] = useDarkMode();
    const [country, setCountry] = useState();
    let history = useHistory();
    const { id } = useParams();
    const [axis, setAxis] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const findCountry = countries.find(country => country.alpha3Code === id);
        setCountry(findCountry);
    }, [countries, id]);
    
    const handleBack = () => history.goBack();
    const handleBackToAll = () => history.push('/');
    
    let showCountry = false;
    
    if (country) {
        showCountry = true;
    }

    const animateCard = (e) => setAxis({
        x: (window.innerWidth / 2 - e.pageX) / 25,
        y: (window.innerHeight / 2 - e.pageY) / 25
    });

    const animateOut = () => setAxis({
        x: 0,
        y: 0
    });

    const animateIn = (e) => setAxis({
        x: (window.innerWidth / 2 - e.pageX) / 25,
        y: (window.innerHeight / 2 - e.pageY) / 25
    });

    const displayMode = getMode(theme);

    return (showCountry ? 
        <Card 
            key={country.alpha3Code} 
            onMouseMove={animateCard}
            onMouseLeave={animateOut}
            onMouseEnter={animateIn}
        >
            <Details x={axis.y} y={axis.x}>
                <Circle>
                    <InnerCircle></InnerCircle>
                    <Img 
                        x={axis.y} 
                        y={axis.x} 
                        src={country.flag} 
                        alt="Country flag"
                    />
                </Circle>
                <InfoDetail x={axis.y} y={axis.x}>
                    <Title>{country.name}</Title>
                    <CountryInfo capital={country.capital} subregion={country.subregion} population={country.population} borders={country.borders} />
                    <NavBtn>
                        <Btn onClick={handleBackToAll}>Back to all</Btn>
                        <Btn onClick={handleBack}>Back</Btn>
                        <Btn onClick={toggleTheme}>{displayMode}</Btn>
                    </NavBtn>
                </InfoDetail>
            </Details> 
        </Card> : <p>loading...</p>
    );
}


export default CountryDetails;