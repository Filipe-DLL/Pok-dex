import { createContext, useState } from "react";

export const themes = {
    dark: {
        background: '#1F2632',
        color: '#CEE3E9'
    },
    light: {
        background: '#eee',
        color: '#000'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)
    const [temaAnterior, setTemaAnterior] = useState([theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme, temaAnterior, setTemaAnterior }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
