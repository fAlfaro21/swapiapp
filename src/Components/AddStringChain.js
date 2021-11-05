import React, { useState } from 'react';
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const AddStringChain = ({setStringChain}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length > 0){
            setStringChain([inputValue]);
        }
    }

    return (
        <Form onSubmit={ handleSubmit } inline="true">
            <h6>Search People</h6>
            <Row className="g-8">
                <Col md>
                    <FormControl type="text" name="q" onChange={ handleInputChange }
                        placeholder="Search"
                        className="mr-sm-2 ml-sm-5"
                        autoComplete="off"
                    >
                    </FormControl>
                </Col>
                <Col md>
                    <Button type="submit" variant="primary">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}

AddStringChain.propTypes = {
    setStringChain: PropTypes.func.isRequired
}
