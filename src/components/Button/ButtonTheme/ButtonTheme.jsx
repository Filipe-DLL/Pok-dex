import { useContext } from "react"
import { ThemeContext } from "../../../context/theme-context"
import { ButtonContainer, StyledButton } from "./style"

export function ButtonTheme() {

    const {themes, theme, setTheme, temaAnterior, setTemaAnterior } = useContext(ThemeContext)

    return (
        <ButtonContainer>
            <StyledButton theme={temaAnterior}
                onClick={() => {
                    setTemaAnterior(theme)
                    setTheme(theme === themes.light ? themes.dark : themes.light)
                }}>
                Tema
            </StyledButton>
        </ButtonContainer>
    )
}
