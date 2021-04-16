let baseURL = "https://pokeapi.co/api/v2";
let query = "/pokemon?offset=0&limit=151";

fetch(baseURL + query)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        let ourArr = json.results.map(id => id.name);
        ourArr.sort();
        console.log(ourArr);
    })