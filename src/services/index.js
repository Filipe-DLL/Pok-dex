import axios from "axios"

export function getAllPokemons() {
  console.log('test');
 return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(response => response.data.results);
}

export function getPokemons(cont) {
  let linkList = []
  for (let i = 1; i <= cont; i++) {
      linkList.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  }
  return axios.all(linkList.map(link => axios.get(link))).then(response => response.map(res => res.data))
}