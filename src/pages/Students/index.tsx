import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import { api } from "@/services/api";
import { Gender, GenderMessages } from "@/enums/Gender";

import { Search } from "@/components/Search";
import { ActionsButton } from "@/components/ActionsButton";

type StudentsPagination = GenericPagination<Student>;

export function Students() {
  const [studentsPagination, setStudentsPagination] =
    useState<StudentsPagination>({} as StudentsPagination);

  const [isLoading, setIsLoading] = useState(true);
  const [showNewStudentModal, setShowNewStudentModal] = useState(false);
  const handleShowNewStudentModal = () => setShowNewStudentModal(true);
  const handleCloseNewStudentModal = () => setShowNewStudentModal(false);

  async function fetchStudents() {
    try {
      const { data } = await api.get<StudentsPagination>("/students");

      setStudentsPagination(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Container fluid>
      <Button
        variant="primary"
        className="mb-4"
        onClick={handleShowNewStudentModal}
      >
        Novo aluno
      </Button>

      <Card>
        <Card.Body>
          <div className="w-100 mb-4">
            <Search placeholder="Pesquise por um aluno" />
          </div>

          {isLoading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <table className="default-table table-bordered text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Sexo</th>
                  <th>Turma</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {Boolean(studentsPagination?.data?.length) ? (
                  studentsPagination?.data?.map((student, index) => {
                    const genderMessage =
                      GenderMessages[student.gender as Gender];
  
                    return (
                      <tr key={`student-${index}`}>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{genderMessage}</td>
                        <td>{student.classroom}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <ActionsButton />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="text-center">
                    <td colSpan={12}>Sem alunos cadastrados</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
