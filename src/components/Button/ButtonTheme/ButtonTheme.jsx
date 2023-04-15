import { useContext } from "react"
import { ThemeContext } from "../../../context/theme-context"
import { ButtonContainer, StyledButton } from "./style"
import { FaMoon } from "react-icons/fa"
import { BsFillSunFill } from "react-icons/bs"


export function ButtonTheme() {

    const {themes, theme, setTheme, setTemaAnterior } = useContext(ThemeContext)

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
