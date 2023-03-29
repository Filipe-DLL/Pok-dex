import { useContext } from "react";
import { ButtonTheme } from "../../components/Button/ButtonTheme/ButtonTheme";
import { Cards } from "../../components/Cards/Cards";
import { ThemeContext } from "../../context/theme-context";
import { HomeContainer } from "./style";

export function Home() {

    const { theme } = useContext(ThemeContext)

    return (
        <HomeContainer theme={theme}>
            <ButtonTheme />
            <Cards />
        </HomeContainer>
    )
}
