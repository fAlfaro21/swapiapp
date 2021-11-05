import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { peopleReducer } from '../reducers/peopleReducer';
import { showPeopleReducer } from '../reducers/showPeopleReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Esto me ayudara a poder tener mas de 1 reducer
//Aqui se define la estructura del Store
const reducers = combineReducers({
    peopleSaved: peopleReducer,
    showPeopleDetails: showPeopleReducer
});

//createStore unicamente acepta un reducer, por eso hemos creado antes un combineReducer
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);