import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import { FaBook, FaUserClock, FaBookOpenReader } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";

import { DashboardCard } from "@/components/DashboardCard";

import "./styles.scss";

export function Dashboard()
{
    return (
        <Container fluid>
            <div className="d-flex justify-content-between gap-4 mb-4">
                <DashboardCard
                    title="Livros"
                    backgroundColor="#52e252"
                    quantity={10}
                    icon={<FaBook />}
                />

                <DashboardCard
                    title="Livros emprestados"
                    backgroundColor="#5353ff"
                    quantity={10}
                    icon={<FaBookOpenReader />}
                />

                <DashboardCard
                    title="Empréstimos"
                    backgroundColor="#ffc354"
                    quantity={5}
                    icon={<FaUserClock />}
                />

                <DashboardCard
                    title="Atrasos de devolução"
                    backgroundColor="#ff6a6a"
                    quantity={100}
                    icon={<LuCalendarClock />}
                />
            </div>

            <Card>
                <Card.Header className="bg-green text-light">
                    <Card.Title className="m-0">Empréstimos próximos de vencimento</Card.Title>
                </Card.Header>

                <Card.Body className="p-0">
                    <table className="lendings-table text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome do leitor</th>
                                <th>Livro</th>
                                <th>Data do empréstimo</th>
                                <th>Data de vencimento</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>José Heitor</td>
                                <td>Dom Quixote</td>
                                <td>05/07/2024</td>
                                <td>15/07/2024</td>
                            </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </Container>
    );
}