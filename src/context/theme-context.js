import { createContext, useState } from "react";

import { themes } from "./themes";

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)
    const [temaAnterior, setTemaAnterior] = useState([theme])

    return (
        <ThemeContext.Provider value={{themes, theme, setTheme, temaAnterior, setTemaAnterior }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
