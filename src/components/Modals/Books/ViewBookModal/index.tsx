import Modal, { ModalProps } from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { imageUrl } from "@/services/imageUrl";

type Props = ModalProps & {
  selectedBook: Book;
};

export function ViewBookModal({ selectedBook, ...rest }: Props) {
  return (
    <Modal {...rest}>
      <Modal.Header closeButton>
        <Modal.Title>Ver Livro</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="mb-1">
          <span className="fw-bold">Nome: </span>
          {selectedBook?.name}
        </div>

        <div className="mb-1">
          <span className="fw-bold">Autor: </span>
          {selectedBook?.author}
        </div>

        <div className="mb-1">
          <span className="fw-bold">Editora: </span>
          {selectedBook?.publishingCompany}
        </div>

        <div className="mb-1">
          <span className="fw-bold">Categoria: </span>
          {selectedBook?.category?.name}
        </div>

        <Image
          className="h-150px w-200px rounded mb-1"
          src={`${imageUrl}/books/${selectedBook?.image}`}
        />

        <p className="text-align-justify mb-2">{selectedBook?.synpose}</p>

        <div className="d-flex justify-content-center">
          <Button variant="dark" onClick={() => rest.onHide?.()}>
            Fechar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
