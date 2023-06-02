import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { PokemonDetails } from "../pages/pokemonDetails/pokemonDetails";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/pokemon/:id' element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    )
} 