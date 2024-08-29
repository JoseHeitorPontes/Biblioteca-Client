import { useFormik } from "formik";

import Modal, { ModalProps } from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { api } from "@/services/api";
import { bookInitialValues } from "@/utils/initialValues/book";

import { CategoriesSelect } from "@/components/Selects/CategoriesSelect";

type Props = ModalProps & {};

export function NewBookModal({ ...rest }: Props) {
  const formik = useFormik({
    initialValues: bookInitialValues,
    async onSubmit(values) {
      try {
        const { data } = await api.post("/books", values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { values } = formik;

  return (
    <Modal {...rest}>
      <Modal.Header closeButton>
        <Modal.Title>Novo livro</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Nome:</Form.Label>

            <Form.Control {...formik.getFieldProps("name")} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Autor:</Form.Label>

            <Form.Control {...formik.getFieldProps("author")} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Editora:</Form.Label>

            <Form.Control {...formik.getFieldProps("publishingCompany")} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Sinopse:</Form.Label>

            <Form.Control {...formik.getFieldProps("synpose")} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Categoria:</Form.Label>

            <CategoriesSelect />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Imagem:</Form.Label>

            <Form.Control type="file" />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button type="submit">Cadastrar</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
