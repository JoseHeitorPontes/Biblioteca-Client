import { useState } from "react";

import { Link } from "react-router";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

import { FaBars } from "react-icons/fa";

import "./styles.css";

export function Sidebar() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar id="navbar">
                <Container fluid>
                    <div className="d-flex align-items-center gap-2">
                        <button id="menu-button" className="fs-5" onClick={handleShow}>
                            <FaBars />
                        </button>

                        <h4 className="m-0">Biblioteca</h4>
                    </div>
                </Container>
            </Navbar>

            <Offcanvas show={show}>
                <Offcanvas.Header closeButton onHide={handleClose}>
                    <h4 className="m-0">Biblioteca</h4>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <nav>
                        <ul className="m-0 p-0">
                            <li className="menu-item">
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
