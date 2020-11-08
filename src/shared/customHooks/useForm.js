import { useState } from 'react';

const useForm = submitCallback => {
    const [state, setState] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        submitCallback(state);
    }

    const handleChange = e => {
        e.persist();
        setState(e.target.value);
    }

    return [state, handleChange, handleSubmit];
}

export default useForm;