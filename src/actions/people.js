import { types } from "../types/types";

export const addNewPeople = ( name ) => ({
    type: types.peopleAddNew,
    payload: {
        name
    }
})

export const showPeopleDetails = ( name, gender, height, mass, hair_color, skin_color, birth_year, eye_color ) => ({
    type: types.peopleShowDetails,
    payload: {
        name,
        gender,
        height,
        mass,
        hair_color, 
        skin_color,
        birth_year, 
        eye_color
    }
})

export const savedButton = () => ({
    type: types.savedButton,
    payload: true
})

export const showDetailsButton = () => ({
    type: types.showDetailsButton,
    payload: true
})