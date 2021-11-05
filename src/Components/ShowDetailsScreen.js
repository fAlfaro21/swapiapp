import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export const ShowDetailsScreen = ({ peopleDetails = {} }) => {
    
    return (
        <>      
            <div className="card-grid">  

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title as='div'>
                            <strong>Information about...</strong>
                        </Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Name: {peopleDetails.name}</ListGroupItem>
                            <ListGroupItem>Gender: {peopleDetails.height}</ListGroupItem>
                            <ListGroupItem>Mass: {peopleDetails.mass}</ListGroupItem>
                            <ListGroupItem>Hair color: {peopleDetails.hair_color}</ListGroupItem>
                            <ListGroupItem>Skin color: {peopleDetails.skin_color}</ListGroupItem>
                            <ListGroupItem>Eye color: {peopleDetails.eye_color}</ListGroupItem>
                            <ListGroupItem>Birth year: {peopleDetails.birth_year}</ListGroupItem>
                            <ListGroupItem>Gender: {peopleDetails.gender}</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}