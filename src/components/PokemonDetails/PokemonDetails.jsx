import { PokemonHeader, BehindName } from "./style";

export function PokemonDetails(props) {

    return (
        <>
            <BehindName>{props.props.name}</BehindName>
            <PokemonHeader>
                <div>
                    <h2>{props.props.name}</h2>
                    <h3>
                        {props.props.types.map(item => (' ' + item.type.name))}
                    </h3>
                </div>
                <img src={props.props.sprites.other['official-artwork'].front_default} alt={`imagem do ${props.props.name}`} height={'100%'} />
            </PokemonHeader>
        </>
    )

}
