import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewPeople, savedButton, showDetailsButton, showPeopleDetails } from '../actions/people';
import { Button, Table } from 'react-bootstrap';

export const PeopleGridItem = ({name, gender, birth_year, eye_color, height, mass, hair_color, skin_color}) => {

    const dispatch = useDispatch();
    
    const handleSave = () => {
        let peopleSaved = localStorage.getItem(name);
        if( peopleSaved == null){
            localStorage.setItem(name, name);
            dispatch( addNewPeople( name ) );
            dispatch( savedButton ( true ) );
        }
    }

    const handleShowDetails = () => {
        dispatch( showPeopleDetails(name, gender, height, mass, hair_color, skin_color, birth_year, eye_color) );
        dispatch( showDetailsButton ( true ) );
    }

    return (
        <>
            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <td>{ name }</td>
                        <td>{ gender }</td>
                        <td>{ birth_year }</td>
                        <td>{ eye_color }</td>
                        <td>
                            <Button variant="primary" className="btn-sm" onClick={handleShowDetails}>
                                Show details
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary" className="btn-sm" onClick={handleSave}>
                                Save
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

