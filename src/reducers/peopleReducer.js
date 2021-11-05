
import { types } from "../types/types";

const initialState ={
    people: [],
}

export const peopleReducer = ( state = initialState, action) => {

    switch (action.type) {
        
        case types.peopleAddNew:
            return {
                ...state,
                people: [ action.payload, ...state.people ]
            }

        default:
            return state;
    }
}