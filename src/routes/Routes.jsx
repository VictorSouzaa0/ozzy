import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Discography from "../pages/Discography";
import Famous from "../pages/Famous"; 

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discografia" element={<Discography />} />
            <Route path="/sucessos" element={<Famous />} />
        </Routes>
    );
}