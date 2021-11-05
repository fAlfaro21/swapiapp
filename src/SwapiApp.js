import React, {useState} from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Card } from 'react-bootstrap';
import { AddStringChain } from './Components/AddStringChain';
import { PeopleGrid } from './Components/PeopleGrid';
import { SavedPeopleScreen } from './Components/SavedPeopleScreen';
//import { addNewPeople } from './actions/people';
//import { useDispatch } from 'react-redux';

const SwapiApp = ({ defaultStringChain = [] }) => {

    const [stringChain, setStringChain] = useState(defaultStringChain);

    //const dispatch = useDispatch();

    let peopleSavedArray = [];

    for (let index = 0; index < localStorage.length; index++) {
        peopleSavedArray.push(localStorage.key(index));
        //  dispatch( addNewPeople( peopleSavedArray[index] ) );
    }
    

    return (
        <Provider store={ store }>
            <div>
                <h2>Web test</h2>
                <h3>Play with SWAPI</h3>
            </div>
            <div className = "main">
                <div>
                    <AddStringChain setStringChain = { setStringChain } />
                    <hr/> 

                    {/* <button onClick = {handleAdd}>Agregar</button> */}

                    <ol>
                        {
                            stringChain.map(stringChain=>(
                                <PeopleGrid 
                                    key = { stringChain }
                                    stringChain = { stringChain }
                                    //peopleSavedOrder = { peopleSavedOrder }
                                />
                            ))
                        }
                    </ol>
                    {/* <label>Saved people</label> */}
                    <SavedPeopleScreen peopleSavedArray={peopleSavedArray}/>
                </div>
                <Card>
                    <label>Information about...</label>
                </Card>
            </div>
        </Provider>
    );
}

export default SwapiApp;