import React from 'react';
import { Info, Strong, Right } from '../shared/utils/styled';
const CountryInfo = ({ capital, subregion, population, borders }) => (
  <Info>
      <div>
        <p><Strong>Capital:</Strong> {capital}</p>
        <p><Strong>Subregion:</Strong> {subregion}</p>
        <p><Strong>Population:</Strong> {population}</p>
      </div>
      <Right>
        <h3>Neighbors</h3>
        {borders && borders.map(neighbor => <p key={neighbor}>{neighbor}</p>)}
      </Right>
  </Info>
)


export default CountryInfo;