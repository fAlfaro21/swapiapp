import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useFetchPeople } from '../hooks/useFetchPeople';
import { PeopleGridItem } from './PeopleGridItem';

export const PeopleGrid = ({stringChain}) => {

    
    const { data:peopleInfo, loading } = useFetchPeople(stringChain);

    //const { people } = useSelector( state => state.peopleSaved ); 
    
    return (
        <>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">  

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>GENDER</th>
                            <th>BIRTH YEAR</th>
                            <th>EYE COLOR</th>
                        </tr>
                    </thead>
                </Table>
                    {
                        peopleInfo.map( (info) => (
                                <PeopleGridItem 
                                    key = {info.name}
                                    {...info}
                                />
                            )
                        )
                    }
            </div>
        </>
    )
}

PeopleGrid.propTypes = {
    stringChain: PropTypes.string.isRequired
}





