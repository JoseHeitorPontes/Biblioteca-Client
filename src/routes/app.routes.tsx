import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

import { Sidebar } from "@/components/Sidebar";

import { Login } from "@/pages/Login";
import { NewUser } from "@/pages/NewUser";
import { ForgotPassword } from "@/pages/ForgotPassword";
import { Dashboard } from "@/pages/Dashboard";
import { Categories } from "@/pages/Categories";
import { Books } from "@/pages/Books";
import { Lendings } from "@/pages/Lendings";

export function AppRoutes() {
  const { currentUser } = useAuth();
  const hasCurrentUser = Boolean(Object.values(currentUser).length);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {hasCurrentUser ? (
            <Route
              element={
                <>
                  <Sidebar />

                  <Outlet />
                </>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categorias" element={<Categories />} />
              <Route path="/livros" element={<Books />} />
              <Route path="/emprestimos" element={<Lendings />} />
            </Route>
          ) : (
            <Route>
              <Route path="/" element={<Login />} />
              <Route path="/novo-usuario" element={<NewUser />} />
              <Route path="/recuperar-senha" element={<ForgotPassword />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}
