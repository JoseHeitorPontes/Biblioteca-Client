import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

import { FaEye, FaTrash } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";

type Props = {
  handleShow?: () => void;
  handleEdit?: () => void;
  handleDelete?: () => void;
};

export function ActionsButton({ handleShow, handleEdit, handleDelete }: Props) {
  return (
    <div className="d-flex justify-content-center gap-2">
      <OverlayTrigger overlay={<Tooltip>Ver</Tooltip>}>
        <Button variant="info" className="text-light" onClick={handleShow}>
          <FaEye />
        </Button>
      </OverlayTrigger>

      <OverlayTrigger overlay={<Tooltip>Editar</Tooltip>}>
        <Button variant="success" onClick={handleEdit}>
          <BiSolidEdit />
        </Button>
      </OverlayTrigger>

      <OverlayTrigger overlay={<Tooltip>Deletar</Tooltip>}>
        <Button variant="danger" onClick={handleDelete}>
          <FaTrash />
        </Button>
      </OverlayTrigger>
    </div>
  );
}
