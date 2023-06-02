import { useContext } from "react"
import { ThemeContext } from "../../../context/theme-context"

import { FaMoon } from "react-icons/fa"
import { BsFillSunFill } from "react-icons/bs"
import { ButtonContainer, StyledButton } from "./style"


export function ThemeButton() {

    const { themes, theme, setTheme, setTemaAnterior } = useContext(ThemeContext)

    return (
        <ButtonContainer>
            <StyledButton theme={theme}
                onClick={() => {
                    setTemaAnterior(theme)
                    setTheme(theme === themes.light ? themes.dark : themes.light)
                }}>
                {theme === themes.light ? <FaMoon /> : <BsFillSunFill />}
            </StyledButton>
        </ButtonContainer>
    )
}
