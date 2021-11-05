import React, { useState } from 'react';
import { store } from '../store/store';
import { Button, Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

export const AddStringChain = ({setStringChain}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length > 0){
            setStringChain([inputValue]);
            //setInputValue('');
        }
    }

    return (
        // <>
        //     <Form>
        //         <label>Search people</label>
        //         <Button variant="primary" onClick={ handleSubmit }>Search</Button>
        //         <input
        //             type = "Text"
        //             value = { inputValue }
        //             onChange = { handleInputChange }
        //         />
        //     </Form>
        // </>

        <Provider store={ store }>
            <Form onSubmit={ handleSubmit } inline="true">
                <h6>Search People</h6>
                <FormControl type="text" name="q" onChange={ handleInputChange }
                    placeholder="Search"
                    className="mr-sm-2 ml-sm-5"
                    autoComplete="off"
                >
                </FormControl>
                <Button type="submit" variant="primary" className="p-2">Search</Button>
            </Form>
        </Provider>




    )
}

AddStringChain.propTypes = {
    setStringChain: PropTypes.func.isRequired
}
