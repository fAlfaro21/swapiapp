import React from 'react';

//import { Button, Form, FormControl } from 'react-bootstrap';

export const SavedPeopleScreen = ({peopleSavedArray}) => {

    //let peopleSavedArray;

    //useEffect( () => {
         
        // peopleSavedArray = [];

        // for (let index = 0; index < localStorage.length; index++) {
        //     peopleSavedArray.push(localStorage.key(index));
        // }

        //peopleSavedOrder(peopleSavedArray);

      //}, [peopleSavedOrder])

    return (
        <>
            <div>
                <label>Saved people</label>
                {
                    peopleSavedArray.map( (info) => (
                        
                        <h6 key = {info}>{info}</h6>

                    ))
                }
            </div>
        </>

    )
}