export function PokemonDetails(props) {

    return (
        <>
            <img src={props.props.sprites.front_default} alt={`imagem do ${props.props.name}`} />
            <h1>{props.props.name}</h1>
            <h2>
                {'Type:' + props.props.types.map(item => (' ' + item.type.name))}
            </h2>
        </>
    )
}
