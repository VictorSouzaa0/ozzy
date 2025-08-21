import { Routes, BrowserRouter, Route } from "react-router";
import Home from "../pages/Home";
import Discography from "../pages/Discography";


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/discography" element={Discography}/>
            </Routes>
        </BrowserRouter>
    )
}