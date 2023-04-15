import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UlMoves } from "./style";
import { ThemeContext } from "../../context/theme-context";

export function MovesDetails(props) {

    const { theme } = useContext(ThemeContext)

    const [moves, setMoves] = useState([])

    useEffect(() => {
        getMoves()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getMoves() {
        axios.all(props.props.map(item => axios.get(item.move.url))).then(response => setMoves(response))
    }

    return (
        <UlMoves theme={theme}>
            <h1>Moves:</h1>
            {moves.map((item) => (
                <li key={item.data.name}>
                    {item.data.name}
                </li>
            ))}
        </UlMoves>
    )
}