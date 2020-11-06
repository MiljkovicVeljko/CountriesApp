import React from 'react';
import { useHistory } from 'react-router-dom';
import { Img, Wrapper } from '../shared/utils/styled';

const Country = ({ country }) => {
  const { name, capital, flag, subregion, population } = country;

  let history = useHistory();

  const onClick = () => {
      history.push(`/${country.alpha3Code}`);
  }

  return (
    <Wrapper key={name} >
        <Img src={flag} alt="Country flag"/>
        <h3>{name}</h3>
        <button onClick={onClick}>See more details</button>
    </Wrapper>
    );
}


export default Country;