import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, PokemonDetails, PokemonHeader, PokemonSection } from './style';

export function CardDetails() {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState([])
  const [abilities, setAbilities] = useState([])
  const [moves, setMoves] = useState([])

  useEffect(() => {
    getPokemon()
  }, [])

  function getPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) => {
      setPokemon(response)
      setAbilities(response.data.abilities)
      setMoves(response.data.moves)
    })
  }

  console.log(abilities, 'habilidades')
  console.log(moves, 'movimentos')

  return (
    <PokemonDetails>
      {pokemon.data && (
        <Container>
          {/* {console.log(pokemon, 'pokemon')}
          {console.log(pokemon.data.types, 'types')} */}

          <PokemonHeader>
            <img src={pokemon.data.sprites.front_default} alt={`imagem do ${pokemon.data.name}`} />
            <h1>{pokemon.data.name}</h1>
            <h2>
              {'Type:' + pokemon.data.types.map(item => (' ' + item.type.name))}
            </h2>
          </PokemonHeader>
          {/* <PokemonSection>
            <ul>
              {abilities.map((iten, indice) => (
                <li key={indice}>
                  <h1>{iten.ability.name}</h1>
                  <h2>{iten.ability.url}</h2>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                {moves.map((iten, indice) => (
                  <li key={indice}>
                    <h1>{iten.move.name}</h1>
                    <h2>{iten.move.url}</h2>
                  </li>
                ))}
              </li>
            </ul>
          </PokemonSection> */}
        </Container>
      )}
    </PokemonDetails>
  )
}



//  <div>
//  <ul>
//      <li>
//        Lista de movimentos do pokemon (moves)
//     </li>
//      <li>
//        Lista de habilidades do pokemon (abilities)
//      </li>
//    </ul>
//  </div> 