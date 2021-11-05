import { types } from "../types/types";

const initialState = false;

export const buttonSaveReducer = ( state = initialState, action) => {

    switch (action.type) {
        
        case types.savedButton:
            return {
                ...state,
                savedButton: action.payload
            }

        default:
            return state;
    }
}