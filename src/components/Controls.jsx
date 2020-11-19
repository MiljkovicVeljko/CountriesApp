import React from 'react';
import { useDarkMode } from '../shared/customHooks/useDarkMode';
import useForm from '../shared/customHooks/useForm';
import { getMode } from '../shared/helpers/helpers';
import { Controller, Input, Submit, Btn } from '../styled/styled';

const Controls = ({ handleSearchName }) => {
  const [theme, toggleTheme] = useDarkMode();
  const [state, handleChange, handleSubmit] = useForm(handleSearchName);
  
  const displayMode = getMode(theme);

  return (
    <Controller>
      <form onSubmit={e => handleSubmit(e)}>
        <Input
          type='text'
          onChange={handleChange}
          value={state}
          placeholder='search countries by name'
        />
        <Submit type='submit' value='Search' />
      </form>
      <Btn onClick={toggleTheme}>{displayMode}</Btn>
    </Controller>
  );
};

export default Controls;
