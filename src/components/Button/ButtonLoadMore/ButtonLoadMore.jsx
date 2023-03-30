import { useContext } from "react"
import { ThemeContext } from "../../../context/theme-context"
import { ButtonContainer, StyledButton } from "./style"

export function ButtonCarregarMais(props) {

    const { temaAnterior } = useContext(ThemeContext)
    
    let cont = 10

    function handleClick() {
        props.carregarMais(cont)
    }

    return (
        <ButtonContainer>
            <StyledButton theme={temaAnterior} onClick={() => { handleClick() }} >
                Carregar Mais
            </StyledButton>
        </ButtonContainer>
    )
}