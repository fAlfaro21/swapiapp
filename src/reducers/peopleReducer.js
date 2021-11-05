/*
ESTE REDUCER TENDRA LA SIGUIENTE ESTRUCTURA:
    {
        notes: [],                  -> Sera un array que contendra todas las NOTAS del usuario
        active: null,               -> Si active es == null, entonces quiere decir que no hay ninguna nota seleccionada
                                        y se mostrara la pantalla morada unicamente
        active: {                   -> Si existe una nota activa (abierta):
            id: 'OIUKJHDTOIUKJNBE'  -> id que da Firebase,
            title: '',              -> Es el titulo de la nota (string)
            body: '',               -> Es el cuerpo de la nota (string)
            imageUrl: '',           -> Es la imagen de la nota (string)
            date: 1284756
        }
    }
*/

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