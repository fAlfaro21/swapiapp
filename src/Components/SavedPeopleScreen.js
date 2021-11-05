import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export const SavedPeopleScreen = ({peopleSavedArray}) => {

    return (
        <>
                <label>Saved people</label>
            <Row>
                    {
                        peopleSavedArray.map( (info) => (
                                    <Card key = {info} >
                                        {info}
                                    </Card>
                        ))
                    }
            </Row>
        </>

    )
}