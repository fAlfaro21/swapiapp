import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewPeople, showPeopleDetails } from '../actions/people';
import { Button, Table } from 'react-bootstrap';
//import { ShowDetailsScreen } from './ShowDetailsScreen';

export const PeopleGridItem = ({name, gender, birth_year, eye_color, height, mass, hair_color, skin_color}) => {

    const dispatch = useDispatch();
    
    const handleSave = () => {

            let peopleSaved = localStorage.getItem(name);

            if( peopleSaved == null){
                localStorage.setItem(name, name);
                dispatch( addNewPeople( name ) );
            }

    }

    const handleShowDetails = () => {

        dispatch( showPeopleDetails(name) );
    }

    return (
        <>
            <Table striped bordered hover size="sm">
                    {/* <thead>
                        <tr>
                            <th>     </th>
                            <th>     </th>
                            <th>     </th>
                            <th>     </th>
                        </tr>
                    </thead> */}
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

