import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '@/contexts/AuthContext';

import { Sidebar } from '@/components/Sidebar';

import { Login } from '@/pages/Login';
import { NewUser } from '@/pages/NewUser';
import { ForgotPassword } from '@/pages/ForgotPassword';
import { Dashboard } from '@/pages/Dashboard';
import { Categories } from '@/pages/Categories';
import { Books } from '@/pages/Books';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/novo-usuario" element={<NewUser />} />
                <Route path="/recuperar-senha" element={<ForgotPassword />} />

                <Route element={
                    <AuthProvider>
                        <Sidebar />

                        <Outlet />
                    </AuthProvider>
                }>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/categorias" element={<Categories />} />
                    <Route path="/livros" element={<Books />} />
                </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}