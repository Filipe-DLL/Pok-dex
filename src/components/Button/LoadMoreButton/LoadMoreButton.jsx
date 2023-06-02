import { useContext } from "react"
import { ThemeContext } from "../../../context/theme-context"
import { ButtonContainer, StyledButton } from "./style"

export function LoadMoreButton(props) {

    const { temaAnterior } = useContext(ThemeContext)

    function handleClick() {
        props.loadMore()
    }

    return (
        <ButtonContainer>
            <StyledButton theme={temaAnterior} onClick={() => { handleClick() }} >
                Load More
            </StyledButton>
        </ButtonContainer>
    )
}