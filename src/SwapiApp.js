import React, {useEffect, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddStringChain } from './Components/AddStringChain';
import { PeopleGrid } from './Components/PeopleGrid';
import { SavedPeopleScreen } from './Components/SavedPeopleScreen';
import { ShowDetailsScreen } from './Components/ShowDetailsScreen';

const SwapiApp = ({ defaultStringChain = [] }) => {

    const dispatch = useDispatch();

    const [stringChain, setStringChain] = useState(defaultStringChain);
    const { savedButton } = useSelector( state => state.buttonSave ); 
    const { showDetailsButton } = useSelector( state => state.buttonShow ); 
    const { peopleDetails } = useSelector( state => state.showPeopleDetails ); 

    useEffect(() => {
        //console.log(savedButton);
    }, [savedButton, showDetailsButton, dispatch])

    let peopleSavedArray = [];

    for (let index = 0; index < localStorage.length; index++) {

        peopleSavedArray.push(localStorage.key(index));
        //dispatch( addNewPeople( localStorage.key(index) ) )

    }

    return (
        <>
            <div>
                    <h2>Web test</h2>
                    <h3>Play with SWAPI</h3>
            </div>
            <Row className="g-8" >
                {/* <div className = "main"> */}
                    <Col md>
                        <AddStringChain setStringChain = { setStringChain } />
                        <hr/>
                        <ol className = "main">
                            {
                                stringChain.map(stringChain=>(
                                    <PeopleGrid 
                                        key = { stringChain }
                                        stringChain = { stringChain }
                                    />
                                ))
                            }
                        </ol>
                        <SavedPeopleScreen peopleSavedArray={peopleSavedArray}/>
                    </Col>
                    <Col>
                        <ShowDetailsScreen peopleDetails={peopleDetails}/>
                    </Col>
                {/* </div> */}
            </Row>
        </>
    );
}

export default SwapiApp;