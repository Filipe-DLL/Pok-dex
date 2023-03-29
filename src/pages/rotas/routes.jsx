import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardDetails } from "../CardsDetails/CardDetails";
import { Home } from "../Home/Home";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/pokemon/:id' element={<CardDetails />} />
            </Routes>
        </BrowserRouter>
    );
} 