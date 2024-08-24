import { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import { FaBars } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { MdMenuBook } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { api } from "@/services/api";
import { useAuth } from "@/hooks/useAuth";
import { useSwal } from "@/hooks/useSwal";

import { SidebarLink } from "../SidebarLink";

export function Sidebar() {
  const { Swal } = useSwal();

  const { currentUser, setCurrentUser } = useAuth();
  const [showSideBar, setShowSideBar] = useState(false);
  const handleCloseSideBar = () => setShowSideBar(false);

  async function logout() {
    try {
      const { isConfirmed } = await Swal.fire({
        icon: "question",
        text: "Tem certeza que deseja sair?",
      });

      if (isConfirmed) {
        await api.post("/logout");

        localStorage.removeItem("token");
        setCurrentUser({} as User);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const userName = currentUser.name?.split(" ").slice(0, 2).join(" ");

  return (
    <>
      <Navbar expand="lg" className="bg-green mb-4">
        <Container fluid>
          <div className="d-flex align-items-center gap-2">
            <Button className="btn-green" onClick={() => setShowSideBar(true)}>
              <FaBars />
            </Button>

            <h3 className="mb-0 text-light">Biblioteca</h3>
          </div>

          <div className="d-flex align-items-center justify-content-between gap-4">
            <span className="text-light">
              <FaUserCircle /> {userName}
            </span>

            <Button className="btn-green" onClick={() => logout()}>
              Sair <TbLogout />
            </Button>
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={showSideBar} onHide={handleCloseSideBar}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-green">Biblioteca</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <nav className="d-flex flex-column gap-2">
            <SidebarLink path="/dashboard">
              <MdDashboard />
              Dashboard
            </SidebarLink>

            <SidebarLink path="/categorias">
              <SiBookstack />
              Categorias
            </SidebarLink>

            <SidebarLink path="/livros">
              <MdMenuBook />
              Livros
            </SidebarLink>

            <SidebarLink path="/alunos">
              <FaUserGraduate />
              Alunos
            </SidebarLink>

            <SidebarLink path="/emprestimos">
              <FaUserClock />
              Empréstimos
            </SidebarLink>

            <SidebarLink path="/meu-perfil">
              <FaUser />
              Meu perfil
            </SidebarLink>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
