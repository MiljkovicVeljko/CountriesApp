import React from 'react';
import { useHistory } from 'react-router-dom';
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

const Country = ({ country }) => {
  const { name, capital, flag, subregion, population } = country;

  let history = useHistory();

  const onClick = () => {
      history.push(`/${country.alpha3Code}`);
  }

  return (
    <Wrapper key={name} onClick={onClick}>
        <Img src={flag} alt="Country flag"/>
        <h3>{name}</h3>
        <CountryInfo capital={capital} subregion={subregion} population={population} />
    </Wrapper>
    );
}


export default Country;