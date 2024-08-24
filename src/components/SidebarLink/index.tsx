import { ReactNode } from "react";

import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  path: string;
};

export function SidebarLink({ children, path }: Props) {
  return (
    <Row>
      <Link
        to={path}
        className="d-flex align-items-center gap-2 text-green text-decoration-none fw-semibold"
      >
        {children}
      </Link>
    </Row>
  );
}
