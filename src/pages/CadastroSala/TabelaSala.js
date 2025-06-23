// Importação das dependências e arquivos necessários
import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import '../../assets/css/Tabela/TabelaSala.css'; // caminho correto para o CSS

// TabelaSala
const TabelaSala = () => {
  // Estado para controlar qual linha está selecionada
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = useRef(null);
  // Função clicar em uma linha
  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o clique for fora da tabela, desmarca a seleção
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (// tabela com cabeçalho e linhas de exemplo
    <Table ref={tableRef} className="custom-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Curso</th>
          <th>Tema</th>
          <th>Aluno</th>
        </tr>
      </thead>
      <tbody>
        <tr
          className={selectedRow === 0 ? "selected-row" : ""}
          onClick={() => handleRowClick(0)}
        >
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
        </tr>
        <tr
          className={selectedRow === 1 ? "selected-row" : ""}
          onClick={() => handleRowClick(1)}
        >
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
        </tr>
        <tr
          className={selectedRow === 2 ? "selected-row" : ""}
          onClick={() => handleRowClick(2)}
        >
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TabelaSala;