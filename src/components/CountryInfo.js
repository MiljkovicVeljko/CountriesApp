import React from 'react';
import { useHistory } from 'react-router-dom';
import { Info, Strong, Right, Neighbour } from '../styled/styled';
const CountryInfo = ({ capital, subregion, population, borders }) => {
  const neighbours = [...borders];
  let history = useHistory();

  const onRedirect = (neighbour) => {
      history.push(`/${neighbour}`);
  };

  let showBorders = null;

  if(neighbours) {
    showBorders = borders.map(neighbour => <Neighbour onClick={() => onRedirect(neighbour)} key={neighbour}>{neighbour}</Neighbour>)
  }

  return (
    <Info>
        <div>
          <p><Strong>Capital:</Strong> {capital}</p>
          <p><Strong>Subregion:</Strong> {subregion}</p>
          <p><Strong>Population:</Strong> {population}</p>
        </div>
        <Right>
          {neighbours.length !== 0 && <Strong>Neighbours:</Strong>}
          {showBorders}
        </Right>
    </Info>
  )
};

export default CountryInfo;