import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AbilitiesDetails } from '../../components/AbilitiesDetails/AbilitiesDetails';
import { MovesDetails } from '../../components/MovesDetails/MovesDetails';
import { Container, PokemonDetails, PokemonHeader, PokemonSection } from './style';

export function CardDetails() {
  
  const { id } = useParams()
  
  const [pokemon, setPokemon] = useState([])
  const [abilities, setAbilities] = useState([])
  const [moves, setMoves] = useState([])

  useEffect(() => {
    function getPokemon() {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) => {
        setPokemon(response)
        setAbilities(response.data.abilities)
        setMoves(response.data.moves)
      })
    }
    getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





  // console.log(abilities, 'habilidades')
  // console.log(moves, 'movimentos')

  return (
    <PokemonDetails>
      {pokemon.data && (
        <Container>
          {console.log(pokemon, 'pokemon')}
          {console.log(pokemon.data.types, 'types')}

          <PokemonHeader>
            <img src={pokemon.data.sprites.front_default} alt={`imagem do ${pokemon.data.name}`} />
            <h1>{pokemon.data.name}</h1>
            <h2>
              {'Type:' + pokemon.data.types.map(item => (' ' + item.type.name))}
            </h2>
          </PokemonHeader>
          <PokemonSection>
            <AbilitiesDetails props={abilities}/>
            <MovesDetails props={moves}/>
          </PokemonSection>
        </Container>
      )}
    </PokemonDetails>
  )
}