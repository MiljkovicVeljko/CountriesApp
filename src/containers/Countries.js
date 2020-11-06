import React, { useState } from 'react';
import Country from '../components/Country';
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Controls = styled.div`
    width: 100%;
    background: #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    width: 300px;
    padding: .5rem;
    border: none;
    border-radius: 10px;
    margin-right: 1rem;
    outline: none;
    font-size: 20px;
`;

const Submit = styled(Input)`
    padding: .5rem;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    background: blanchedalmond;
    cursor: pointer;
`;

export const Countries = ({ countries }) => {
    const [form, setForm] = useState();

    // useEffect(() => {
    //   axios(
    //     `${API_BASE_URL}name/${form}`
    //   ).then(response => setCountries(response.data.slice(0, 10)));
    // }, [form]);

    const onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    const onSubmit = (e) => {
        e.prevent.default();
        setForm({ [e.target.name]: e.target.value });
        console.log(form);
        // searchByName(form);
    }

    let showContries = null;
    
    if(countries !== []) {
        showContries = countries.map(country => <Country key={country.name} country={country} />)
    }

    return (
        <List>
            <Controls onSubmit={(e) => onSubmit(e)}>
                <Input type="text" placeholder="search countries by name" />
                <Input type="text" placeholder="search countries by region" />
                <Submit type="submit" onChange={onChange} />
            </Controls>

            {showContries}
        </List>
    )
}

export default Countries;