import axios from "axios"
import { useEffect, useState } from "react"
import { UlAbilities } from "./style";

export function MovesDetails(props) {

    console.log(props.props, 'props');

    const [moves, setMoves] = useState([])

    useEffect(() => {
        function getMoves() {
            axios.all(props.props.map(item => axios.get(item.move.url))).then(response => setMoves(response))
        }
        getMoves()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <UlAbilities>
            <h1>Moves:</h1>
            {console.log(moves, 'moves')}
            {moves.map((item) => (
                <li key={item.data.name}>
                    {'- '+ item.data.name}
                </li>
            ))}
        </UlAbilities>
    )
}