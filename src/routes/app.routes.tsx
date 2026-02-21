import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "../pages/Home";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </BrowserRouter>
    );
}
