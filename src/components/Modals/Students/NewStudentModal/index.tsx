import Modal, { ModalProps } from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Select } from "@/components/Selects/Select";

type Props = ModalProps & {};

export function NewStudentModal({ ...rest }: Props) {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>Novo aluno</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Nome:</Form.Label>

            <Form.Control />
          </Form.Group>

          <div className="form-group">
            <Form.Label>Sexo:</Form.Label>

            <Select />
          </div>

          <Form.Group>
            <Form.Label>Data de nascimento:</Form.Label>

            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Email:</Form.Label>

            <Form.Control />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Telefone:</Form.Label>

            <Form.Control />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Cidade:</Form.Label>

            <Form.Control />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Bairro:</Form.Label>

            <Form.Control />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Rua:</Form.Label>

            <Form.Control />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Número:</Form.Label>

            <Form.Control />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button type="submit">Cadastrar</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
