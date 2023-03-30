import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Input, Label } from './style'

export function SearchBar() {


    return (
        <>
            <Label for='search'><FaSearch />
                <Input id='search' type={Text} placeholder={'Searching...'} />
            </Label>
        </>
    )
}
