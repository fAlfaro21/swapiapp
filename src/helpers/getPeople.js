
export const getPeople = async(stringChain) => {


    const url = `https://swapi.dev/api/people/?search=${encodeURI(stringChain)}`;

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
