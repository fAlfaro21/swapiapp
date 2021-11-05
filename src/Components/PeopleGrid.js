import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { useFetchPeople } from '../hooks/useFetchPeople';
import { PeopleGridItem } from './PeopleGridItem';

export const PeopleGrid = ({stringChain}) => {

    //Aqui utilizo mi Custom Hook: useFetchGifs para traer mi coleccion de peopleInfo junto con un estado (true o false)
    const { data:peopleInfo, loading } = useFetchPeople(stringChain);

    // const [peopleSaved, setPeopleSaved] = useState("");

    // const peopleSavedOrder = (name) => {
    //     setPeopleSaved(name);
    //     console.log(peopleSaved);
    //   };
    
    return (
        <>
            {/* <h3 className="animate__animated animate__fadeIn"> { category } </h3>         */}

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
                                //peopleSavedOrder = { peopleSavedOrder }
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





