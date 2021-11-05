//Este helper se manda llamar desde el hook useFetchGifs.js
//Como es una funcion async, esta funcion no regresa la People, sino que regresa una promesa que resuelve la coleccion 
//de mis imagenes.

export const getPeople = async(stringChain) => {


    const url = `https://swapi.dev/api/people/?search=${encodeURI(stringChain)}`;
    //https://swapi.dev/api/people/1/

    const resp = await fetch(url);
    const data = await resp.json();

    const peopleInfo = data.results.map(results =>{
        return{
            name: results.name,
            gender: results.gender,
            birth_year: results.birth_year,
            eye_color: results.eye_color,
            height: results.height,
            mass: results.mass,
            hair_color: results.hair_color,
            skin_color: results.skin_color
        }
    })

    return peopleInfo;

}
