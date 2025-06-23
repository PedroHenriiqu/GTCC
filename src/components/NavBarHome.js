// Importação das dependências e arquivos necessários
import { Link } from 'react-router-dom'; // navegação entre páginas
import logonav from '../../src/assets/img/Logo_nav.png'; // Caminho imagem 
import '../../src/assets/css/NavBar/NavBar.css';

// barra de navegação inicial (página principal)
function NavBar() {
  return (
    // Navbar fixa no topo da tela
    <nav class="navbar fixed-top">
      <div class="container-fluid">

        {/* Logo com link para a página inicial */}
        <Link to="/">
          <img
            src={logonav}
            alt="Logo"
            className="d-inline-block align-text-top"
          />
        </Link>

        {/* Botão de acesso à tela de login */}
        <button class="btn btn-danger" type="button">
          <Link to="/login">
            Login
          </Link>
        </button>

      </div>
    </nav>
  );
}

export default NavBar;
