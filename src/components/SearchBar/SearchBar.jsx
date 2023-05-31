import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Container, Input } from './style'
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'

export function SearchBar(props) {

    const { theme } = useContext(ThemeContext)

    return (
        <Container theme={theme}>
            <FaSearch />
            <Input onChange={(e) => props.pokemonFilter(e.target.value.toLowerCase())} type={'Text'} placeholder={'Search...'} />
        </Container>
    )
}