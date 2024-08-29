import { ReactNode } from "react";

import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import "./styles.scss";

type Props = {
  children: ReactNode;
  path: string;
};

export function SidebarLink({ children, path }: Props) {
  return (
    <Row>
      <Link
        to={path}
        className="sidebar-link text-green"
      >
        {children}
      </Link>
    </Row>
  );
}
