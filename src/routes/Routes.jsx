import { Routes, BrowserRouter, Route } from "react-router";
import Home from "../pages/Home";


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}