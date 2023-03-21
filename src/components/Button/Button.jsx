import { ButtonContainer, StyledButton } from "./style"

export function Button(props) {

    let cont = 10

    function handleClick() {
        props.carregarMais(cont)
    }

    return (
        <ButtonContainer>
        <StyledButton onClick={handleClick} >Carregar Mais</StyledButton>
        </ButtonContainer>
    )
}