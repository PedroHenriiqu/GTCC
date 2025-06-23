// Importações de dependências React e estilo visual
import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import '../../assets/css/Tabela/TabelaTcc.css'; // Importando o CSS externo

// tabela de TCCs
const TabelaTCC = () => {
  // Estado para controlar qual linha está selecionada
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = useRef(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);// Marca a linha clicada como selecionad
  };
 // Efeito para desmarcar seleção quando clicar fora da tabela
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setSelectedRow(null);
      }
    };
    // Adiciona o listener no documento
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove o listener ao desmontar o componente
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (// Tabela Bootstrap
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
      </tbody>
    </Table>
  );
};

export default TabelaTCC;