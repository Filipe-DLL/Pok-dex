import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, DetailsCard, PokemonSection, StyledTabList } from './style';
import { Tab, TabPanel, Tabs } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { AbilitiesDetails } from '../../components/AbilitiesDetails/AbilitiesDetails';
import { PokemonDetails } from '../../components/PokemonDetails/PokemonDetails';
import { MovesDetails } from '../../components/MovesDetails/MovesDetails';
import { ThemeContext } from '../../context/theme-context';
import { ButtonTheme } from '../../components/Button/ButtonTheme/ButtonTheme';
import { BackButton } from '../../components/Button/BackButton/BackButton';

export function CardDetails() {

  const { themes, theme } = useContext(ThemeContext)

  const { id } = useParams()

  const [pokemon, setPokemon] = useState([])
  const [abilities, setAbilities] = useState([])
  const [moves, setMoves] = useState([])

  useEffect(() => {
    getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) => {
      setPokemon(response)
      setAbilities(response.data.abilities)
      setMoves(response.data.moves)
    })
  }

  return (
    <DetailsCard theme={theme}>

      {pokemon.data && (
        <Container theme={theme} types={themes.types} pokemon={pokemon.data}>
          <BackButton />
          <ButtonTheme />
          <PokemonDetails props={pokemon.data} />
          <PokemonSection theme={theme} themes={themes}>
            <Tabs>
              <StyledTabList theme={theme}>
                <Tab>Abilities</Tab>
                <Tab>Moves</Tab>
              </StyledTabList>
        
              <TabPanel>
                <AbilitiesDetails props={abilities} />
              </TabPanel>
              <TabPanel>
                <MovesDetails props={moves} />
              </TabPanel>
            </Tabs>
          </PokemonSection>
        </Container>

      )}
    </DetailsCard>
  )
}