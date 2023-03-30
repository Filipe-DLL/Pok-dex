import { useContext } from "react";
import { ButtonTheme } from "../../components/Button/ButtonTheme/ButtonTheme";
import { Cards } from "../../components/Cards/Cards";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ThemeContext } from "../../context/theme-context";
import { Header, HomeContainer } from "./style";

export function Home() {

    const { theme } = useContext(ThemeContext)

    return (
        <HomeContainer theme={theme}>
            <Header>
                <SearchBar />
                <ButtonTheme />
            </Header>
            <Cards />
        </HomeContainer>
    )
}