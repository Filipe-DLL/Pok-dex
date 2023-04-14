import { ThemeContext } from "../../context/theme-context";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Container, Li, Lista } from "./style";
import { useContext } from "react";


export function Cards(props) {

    const { themes, theme } = useContext(ThemeContext)

    return (
        <Container>
            {props.pokemons.length === 0 ? <ClipLoader color="#36d7b7" /> :
                <Lista pokemonsLength={props.pokemons.length}>
                    {
                        props.pokemons.map((pokemon) => (
                            <Li key={pokemon.data.name}
                                themes={themes}
                                theme={theme}
                                type={pokemon.data.types[0].type.name}>
                                <Link to={`pokemon/${pokemon.data.id}`}>
                                    <img src={pokemon.data.sprites.other['official-artwork'].front_default} alt={`imagem do ${pokemon.data.name}`} />
                                    <h2>{pokemon.data.name}</h2>
                                </Link>
                            </Li>
                        ))
                    }
                </Lista>
            }
        </Container>
    )
}