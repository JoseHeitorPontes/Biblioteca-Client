import { useFormik } from "formik";

import Modal, { ModalProps } from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Feedback from "react-bootstrap/Feedback";

import { IMaskInput } from "react-imask";

import { api } from "@/services/api";
import { useSwal } from "@/hooks/useSwal";
import { studentSchema } from "@/utils/validations/student";
import { studentInitialValues } from "@/utils/initialValues/student";

import { GenderSelect } from "@/components/Selects/GenderSelect";

type Props = ModalProps & {
  fetchStudents: () => Promise<void>;
};

export function NewStudentModal({ fetchStudents, ...rest }: Props) {
  const { Toast } = useSwal();

  const formik = useFormik({
    initialValues: studentInitialValues,
    validationSchema: studentSchema,
    async onSubmit(values) {
      try {
        await api.post("/students", {
          ...values,
          gender: values.gender.value,
        });

        await fetchStudents();

        rest.onHide?.();

        formik.resetForm();

        Toast.fire({
          icon: "success",
          text: "Aluno cadastrado com sucesso!",
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { errors } = formik;

  return (
    <Modal {...rest}>
      <Modal.Header closeButton>
        <Modal.Title>Novo aluno</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="name" className="mb-2">
            <Form.Label>Nome:</Form.Label>

            <Form.Control {...formik.getFieldProps("name")} />

            {errors.name && (
              <span className="text-danger">{errors.name}</span>
            )}
          </Form.Group>

          <div className="form-group mb-2">
            <Form.Label htmlFor="gender">Sexo:</Form.Label>

            <GenderSelect
              inputId="gender"
              onChange={(option) =>
                formik.setFieldValue("gender", option as Option)
              }
            />
          </div>

          <Form.Group controlId="birthdate" className="mb-2">
            <Form.Label>Data de nascimento:</Form.Label>

            <Form.Control type="date" {...formik.getFieldProps("birthdate")} />

            {errors.birthdate && (
              <span className="text-danger">{errors.birthdate}</span>
            )}
          </Form.Group>

          <Form.Group controlId="name" className="mb-2">
            <Form.Label>Email:</Form.Label>

            <Form.Control type="email" {...formik.getFieldProps("email")} />

            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </Form.Group>

          <Form.Group controlId="phone" className="mb-2">
            <Form.Label>Telefone:</Form.Label>

            <IMaskInput
              mask="(00) 00000-0000"
              className="form-control"
              {...formik.getFieldProps("phone")}
            />

            {errors.phone && (
              <span className="text-danger">{errors.phone}</span>
            )}
          </Form.Group>

          <Form.Group controlId="classroom" className="mb-2">
            <Form.Label>Turma:</Form.Label>

            <Form.Control {...formik.getFieldProps("classroom")} />

            {errors.classroom && (
              <span className="text-danger">{errors.classroom}</span>
            )}
          </Form.Group>

          <Form.Group controlId="city" className="mb-2">
            <Form.Label>Cidade:</Form.Label>

            <Form.Control {...formik.getFieldProps("city")} />

            {errors.city && (
              <span className="text-danger">{errors.city}</span>
            )}
          </Form.Group>

          <Form.Group controlId="neighborhood" className="mb-2">
            <Form.Label>Bairro:</Form.Label>

            <Form.Control {...formik.getFieldProps("neighborhood")} />

            {errors.neighborhood && (
              <span className="text-danger">{errors.neighborhood}</span>
            )}
          </Form.Group>

          <Form.Group controlId="street" className="mb-2">
            <Form.Label>Rua:</Form.Label>

            <Form.Control {...formik.getFieldProps("street")} />

            {errors.street && (
              <span className="text-danger">{errors.street}</span>
            )}
          </Form.Group>

          <Form.Group controlId="number" className="mb-4">
            <Form.Label>Número:</Form.Label>

            <Form.Control {...formik.getFieldProps("number")} />

            {errors.number && (
              <span className="text-danger">{errors.number}</span>
            )}
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button type="submit">Cadastrar</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
