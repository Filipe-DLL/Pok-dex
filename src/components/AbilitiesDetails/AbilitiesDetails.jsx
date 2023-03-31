import axios from "axios"
import { useEffect, useState } from "react"
import { ContainerAbilities } from "./style";

export function AbilitiesDetails(props) {

    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        getMoves()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    function getMoves() {
        axios.all(props.props.map(item => axios.get(item.ability.url))).then(response => setAbilities(response))
    }

    return (
        <ContainerAbilities>
            <h1>Abilities:</h1>
            {abilities.map((item) => (
                <div key={item.data.name}>
                    <h2>
                        {'- ' + item.data.name}
                    </h2>
                    <p>
                        {item.data.effect_entries[1].effect}
                    </p>
                </div>
            ))}
        </ContainerAbilities>
    )
}