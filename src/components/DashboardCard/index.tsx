import { ReactNode } from "react";

import "./styles.scss";

type Props = {
    title: string;
    quantity: number;
    icon: ReactNode;
    backgroundColor: string;
};

export function DashboardCard({
    title,
    quantity,
    icon,
    backgroundColor,
}: Props) {
    return (
        <div className="dashboard-card" style={{ backgroundColor }}>
            <h5>{title}</h5>

            <span className="dashboard-card-quantity">{quantity}</span>

            <div className="dashboard-card-icon">
                {icon}
            </div>
        </div>
    );
}
