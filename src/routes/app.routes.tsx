import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Books } from "../pages/Books";

export function AppRoutes() {
    function PageLayout() {
        return (
            <>
                <Header />

                <Outlet />
            </>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path="/" Component={Home} />
                    <Route path="/livros" Component={Books} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
