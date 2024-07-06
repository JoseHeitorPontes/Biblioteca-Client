import Container from "react-bootstrap/Container";
import { FaBook, FaUserClock, FaBookOpenReader } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";

import { DashboardCard } from "@/components/DashboardCard";

export function Dashboard()
{
    return (
        <Container fluid>
            <div className="d-flex justify-content-between gap-4">
                <DashboardCard
                    title="Livros disponíveis"
                    backgroundColor="#65f865"
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
        </Container>
    );
}