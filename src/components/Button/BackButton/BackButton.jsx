
import React from 'react'
import { useContext } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/theme-context'
import { ButtonContainer, StyledButton } from "./style"

export function BackButton() {

    const { theme } = useContext(ThemeContext)

    return (
        <ButtonContainer >
            <StyledButton theme={theme}>
                <Link to={'/'}>
                    <IoChevronBackOutline theme={theme}/>
                </Link>
            </StyledButton>
        </ButtonContainer >
    )
}




