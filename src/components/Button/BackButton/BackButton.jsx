
import React from 'react'
import { useContext } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/theme-context'
import { ButtonContainer } from "./style"

export default function BackButton() {

    const { theme } = useContext(ThemeContext)

    return (
        <ButtonContainer>
            <Link to={'/'}>
                <FaAngleLeft style={{ color: `${theme.textColorPrimary}` }} />
            </Link>
        </ButtonContainer>
    )
}




