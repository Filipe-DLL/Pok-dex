import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Container, Input } from './style'

export function SearchBar() {


    return (
        <Container>
            <FaSearch />
            <Input type={'Text'} placeholder={'Search...'} />
        </Container>
    )
}
