import React from 'react';
import { useHistory } from 'react-router-dom';
import { Img, Wrapper, Btn } from '../styled/styled';

const Country = ({ country }) => {
  const { name, flag, } = country;

  let history = useHistory();

  const onClick = () => {
      history.push(`/${country.alpha3Code}`);
  }

  return (
    <Wrapper key={name} >
        <Img src={flag} alt="Country flag"/>
        <h3>{name}</h3>
        <Btn onClick={onClick}>See more details</Btn>
    </Wrapper>
    );
}


export default Country;