import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs } from 'react-tabs';
import { ClipLoader } from "react-spinners";

import { ThemeContext } from '../../context/theme-context';
import { getPokemon } from '../../services';

import { PokemonDetailsStyled, Container, PokemonSection, StyledTabList, StyledTabPanel, HeaderBar } from './style';

import { AbilitiesDetails } from '../../components/AbilitiesDetails/AbilitiesDetails';
import { PokemonInfos } from '../../components/PokemonInfos/PokemonInfos';
import { MovesDetails } from '../../components/MovesDetails/MovesDetails';
import { ThemeButton } from '../../components/Button/ThemeButton/ThemeButton';
import { BackButton } from '../../components/Button/BackButton/BackButton';

export function PokemonDetails() {

  const { themes, theme } = useContext(ThemeContext)

  const { id } = useParams()

  const [pokemon, setPokemon] = useState([])
  const [abilities, setAbilities] = useState([])
  const [moves, setMoves] = useState([])

  useEffect(() => {
    getPokemon(id)
      .then(response => {
        setPokemon(response)
        setAbilities(response.data.abilities)
        setMoves(response.data.moves)
      })
      .catch(error => console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PokemonDetailsStyled theme={theme}>
      {
        pokemon.data ?
          <Container theme={theme} types={themes.types} pokemon={pokemon.data}>
            <HeaderBar>
              <BackButton />
              <ThemeButton />
            </HeaderBar>
            <PokemonInfos pokemon={pokemon.data} />
            <PokemonSection theme={theme} themes={themes}>

              <Tabs>

                <StyledTabList theme={theme} types={themes.types} pokemon={pokemon.data}>
                  <Tab>Abilities</Tab>
                  <Tab>Moves</Tab>
                </StyledTabList>

                <StyledTabPanel>
                  <AbilitiesDetails props={abilities} />
                </StyledTabPanel>
                <StyledTabPanel>
                  <MovesDetails props={moves} />
                </StyledTabPanel>

              </Tabs>

            </PokemonSection>
          </Container>
          : <ClipLoader color="#36d7b7" />
      }
    </PokemonDetailsStyled>
  )
}