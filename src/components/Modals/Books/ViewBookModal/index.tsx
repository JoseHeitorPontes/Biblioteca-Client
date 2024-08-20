import { useState, useEffect } from "react";

import Modal, { ModalProps } from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { api } from "@/services/api";
import { imageUrl } from "@/services/imageUrl";

type Props = ModalProps & {
    selectedBookId: number;
};

export function ViewBookModal({
    selectedBookId,
    ...rest
}: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [book, setBook] = useState({} as Book);

    async function getBook() {
        try {
            setIsLoading(true);

            const { data } = await api.get(`/books/${selectedBookId}`);

            setBook(data);
        } catch(error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getBook();
    }, [selectedBookId]);

    return (
        <Modal {...rest}>
            <Modal.Header closeButton>
                <Modal.Title>Ver Livro</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {isLoading ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <Spinner variant="primary" animation="border" />
                    </div>
                ) : (
                    <>
                        <div className="mb-1">
                            <span className="fw-bold">Nome: </span>
                            {book?.name}
                        </div>

                        <div className="mb-1">
                            <span className="fw-bold">Autor: </span>
                            {book?.author}
                        </div>

                        <div className="mb-1">
                            <span className="fw-bold">Editora: </span>
                            {book?.publishingCompany}
                        </div>

                        <div className="mb-1">
                            <span className="fw-bold">Categoria: </span>
                            {book?.category?.name}
                        </div>

                        <Image 
                            className="h-150px w-200px rounded mb-1"
                            src={`${imageUrl}/books/${book?.image}`}
                        />

                        <p className="text-align-justify mb-2">{book?.synpose}</p>

                        <div className="d-flex justify-content-center">
                            <Button variant="dark" onClick={() => rest.onHide?.()}>Fechar</Button>
                        </div>
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
}