import React from 'react'
import { REGIONS } from '../shared/constants/regions.constants';
import { 
    Regions, 
    Filter, 
    Title
} from '../styled/styled';

const FilterNav = ({ handleFilter }) => {
    return (
        <Regions>
            <Title>Filter by Region</Title>
            {REGIONS.map(region => <Filter key={region} onClick={() => handleFilter(region)}>{region}</Filter>)}
        </Regions>
    )
}

export default FilterNav;
