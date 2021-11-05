//Para hacer aparecer una nueva nota en la barra izq, una vez que hagamos clic en anadir
import { types } from "../types/types";

export const addNewPeople = ( name ) => ({
    type: types.peopleAddNew,
    payload: {
        name
    }
})

export const showPeopleDetails = ( name ) => ({
    type: types.peopleShowDetails,
    payload: {
        name
    }
})