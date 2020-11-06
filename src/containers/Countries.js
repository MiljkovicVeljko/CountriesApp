import React, { useState } from 'react';
import Country from '../components/Country';
import { List, Controls, Input, Submit } from '../shared/utils/styled';

export const Countries = ({ countries, handleSearch }) => {
    const [form, setForm] = useState("");

    const onChange = e => setForm(e.target.value);
    
    const onSubmit = e => {
        e.preventDefault();
        handleSearch(form);
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
                    {/* <Input type="text" placeholder="search countries by region" /> */}
                    <Submit type="submit" value="Search" />
                </form>
            </Controls>

            {showContries}
        </List>
    )
}

export default Countries;