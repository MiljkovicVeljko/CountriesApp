import React, { useState } from 'react';
import Country from '../components/Country';
import { 
    List, 
    Controls, 
    Input, 
    Submit, 
    Regions, 
    Filter, 
    Title, 
    Btn} from '../styled/styled';
import { REGIONS } from '../shared/constants/regions.constants';

export const Countries = ({ countries, handleSearchName, handleFilter, toggleTheme }) => {
    const [form, setForm] = useState("");

    const onChange = e => setForm(e.target.value);
    
    const onSubmit = e => {
        e.preventDefault();
        handleSearchName(form);
    }

    
    let showContries = null;
    
    if(countries !== []) {
        showContries = countries.map(country => <Country key={country.name} country={country} />)
    }

    return (
        <List>
            <Controls>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Input type="text" onChange={onChange} value={form} placeholder="search countries by name" />
                    <Submit type="submit" value="Search" />
                </form>
                <Btn onClick={toggleTheme}>Toggle mode</Btn>
            </Controls>
            <Regions>
                <Title>Filter by Region</Title>
                <Filter onClick={() => handleFilter("all")}>All</Filter>
                {REGIONS.map(region => <Filter key={region} onClick={() => handleFilter(region)}>{region}</Filter>)}
            </Regions>
            {showContries}
        </List>
    )
}

export default Countries;