
import React from 'react'
import { useContext } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/theme-context'
import { ButtonContainer } from "./style"

export function BackButton() {

    const { theme } = useContext(ThemeContext)

    return (
        <ButtonContainer theme={theme}>
            <Link to={'/'}>
                <FaAngleLeft />
            </Link>
        </ButtonContainer >
    )
}




