import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Container, Input } from './style'

export function SearchBar(props) {

    return (
        <Container>
            <FaSearch />
            <Input onChange={(e) =>props.pokemonFilter(e.target.value)} type={'Text'} placeholder={'Search...'} />
        </Container>
    )
}
