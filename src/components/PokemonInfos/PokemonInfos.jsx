import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

import { PokemonHeader, BehindName } from "./style";

export function PokemonInfos(props) {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <BehindName>{props.pokemon.name}</BehindName>
            <PokemonHeader theme={theme}>
                <div>
                    <h2>
                        {props.pokemon.name}
                    </h2>
                    <h3>
                        {props.pokemon.types && props.pokemon.types.length > 0 ?
                            (props.pokemon.types[0].type.name + (props.pokemon.types[1] ? ' / ' + props.pokemon.types[1].type.name : '')) :
                            ''}
                    </h3>
                </div>
                <img src={props.pokemon.sprites.other['official-artwork'].front_default} alt={`imagem do ${props.pokemon.name}`} height={'100%'} />
            </PokemonHeader>
        </>
    )
}