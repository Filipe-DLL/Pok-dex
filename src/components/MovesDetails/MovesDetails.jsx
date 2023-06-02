import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/theme-context";
import { getMoves } from "../../services";

import { MovesList } from "./style";

export function MovesDetails(props) {

    const { theme } = useContext(ThemeContext)

    const [moves, setMoves] = useState([])

    useEffect(() => {
        getMoves(props)
            .then(response => setMoves(response))
            .catch(error => console.error(error))
        // eslint-disable-next-line
    }, [])

    return (
        <MovesList theme={theme}>
            <h1>Moves:</h1>
            {moves.map((item) => (
                <li key={item.data.name}>
                    {item.data.name}
                </li>
            ))}
        </MovesList>
    )
}