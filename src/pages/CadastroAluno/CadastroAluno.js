// Renderiza a tabela com cabeçalho e linhas de exemplo
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TabelaAluno from "./TabelaAluno.js";
import '../../assets/css/CadastroAluno/CadastroAluno.css';
import NavBar from "../../components/NavBar";

// cadastro de alunos
function CadastroAluno() {
  return (
    <Container>
      {/* Barra de navegação superior */}
      <NavBar />
      <h2 className="text-center mt-4">Cadastro Aluno</h2>

      {/* Formulário de cadastro */}
      <Form className="mt-4 form-container">
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" className="custom-input" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" className="custom-input" />
        </Form.Group>

        <Form.Group controlId="formContato" className="mt-3">
          <Form.Label>Contato</Form.Label>
          <Form.Control type="text" placeholder="Contato" className="custom-input" />
        </Form.Group>

        <Form.Group controlId="formLogin" className="mt-3">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" placeholder="Login" className="custom-input" />
        </Form.Group>

        <Form.Group controlId="formDataNascimento" className="mt-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control type="date" className="custom-input" />
        </Form.Group>

        {/* Botões */}
        <div className="d-flex justify-content-center mt-4">
          <Button variant="danger" className="mr-4">
            Salvar
          </Button>
          <Button variant="danger">Excluir</Button>
        </div>
      </Form>

      <TabelaAluno></TabelaAluno>
    </Container>
  );
}

export default CadastroAluno;