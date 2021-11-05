//Se manda llamar desde el componente GifGrid.js
import { useState, useEffect } from "react";
import { getPeople } from '../helpers/getPeople';

export const useFetchPeople = (stringChain) => {
    
    const [state, setState] = useState({

        data: [],
        loading: true

    });

    useEffect( () => {
         
        //getPeople se encarga de leer el API con el stringChain y devolver un array de objetos {name, mass, hair_color...}
        getPeople(stringChain)
            .then( peopleInfo => {

                    setState({
                        data: peopleInfo,
                        loading: false
                    }) 

            }); 
         
      }, [stringChain])

    return state; //Devuelve {data: [], loading: true}

}
