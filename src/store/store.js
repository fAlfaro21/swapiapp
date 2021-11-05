import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { buttonSaveReducer } from '../reducers/buttonSaveReducer';
import { buttonShowReducer } from '../reducers/buttonShowReducer';

import { peopleReducer } from '../reducers/peopleReducer';
import { showPeopleReducer } from '../reducers/showPeopleReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    peopleSaved: peopleReducer,
    showPeopleDetails: showPeopleReducer,
    buttonSave: buttonSaveReducer,
    buttonShow: buttonShowReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);