import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Discography from "../pages/Discography";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discography" element={<Discography />} />
        </Routes>
    );
}