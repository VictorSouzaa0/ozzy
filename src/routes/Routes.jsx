import { Routes, Route } from "react-router-dom"; // Não precisa mais do BrowserRouter aqui
import Home from "../pages/Home";
import Discography from "../pages/Discography";
import Navbar from "../components/Navbar";

export function AppRoutes() {
    return (

        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discography" element={<Discography />} />
            </Routes>
        </>
    );
}