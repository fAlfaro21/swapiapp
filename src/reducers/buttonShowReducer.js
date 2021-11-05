import { types } from "../types/types";

const initialState = false;

export const buttonShowReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.showDetailsButton:
            return {
                ...state,
                showDetailsButton: action.payload
            }

        default:
            return state;
    }
}