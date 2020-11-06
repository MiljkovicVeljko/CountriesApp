import React from 'react';
import styled from 'styled-components';

const Strong = styled.strong`
  color: firebrick;
`;

const Info = styled.div`
  /* padding: 0 3rem; */
  font-size: 12px;
  margin: 3rem 1.5rem;
  text-align: left;
`;

const CountryInfo = ({ capital, subregion, population }) => (
  <Info>
      <p><Strong>Capital:</Strong> {capital}</p>
      <p><Strong>Subregion:</Strong> {subregion}</p>
      <p><Strong>Population:</Strong> {population}</p>
  </Info>
)


export default CountryInfo;