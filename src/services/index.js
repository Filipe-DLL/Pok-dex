import axios from "axios"

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
})

export function getAllPokemons() {
  return api.get('/pokemon?limit=151&offset=0').then(response => response.data.results);
}

export function getPokemons({ limit, offset }) {
  let linkList = []
  for (let i = offset; i <= limit; i++) {
    linkList.push(`/pokemon/${i}/`)
  }
  return axios.all(linkList.map(link => api.get(link))).then(response => response.map(res => res.data))
}

export function getPokemon(id) {
  return api.get(`/pokemon/${id}/`).then((response => response))
}

export function getMoves(props) {
  return axios.all(props.props.map(item => axios.get(item.move.url))).then(response => response)
}