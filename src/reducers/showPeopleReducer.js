import { types } from "../types/types";

const initialState ={}

export const showPeopleReducer = ( state = initialState, action) => {

    switch (action.type) {
        
        case types.peopleShowDetails:
            return {
                ...state,
                peopleDetails: [ action.payload ]
            }

        default:
            return state;
    }
}