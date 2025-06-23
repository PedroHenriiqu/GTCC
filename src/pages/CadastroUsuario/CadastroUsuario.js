// importação das dependencias e arquivos nescessarios
import NavBar from '../../components/NavBar'
import '../../assets/css/CadastroUsuario/CadUser.css'

function Cadastro_Usuario() {// Componente de Cadastro de Usuário
    return (
        <div>
            <NavBar />
            <div class="container-caduser">
                <div class="name">
                    <h3>Cadastro Usuário</h3>
                </div>
                {/* Campo: Nome do usuário */}
                <div class="mb-3">
                    <label for="text" class="form-label">Nome:</label>
                    <input type="text" class="form-control" placeholder="Nome Usuário..." />
                </div>
                {/* Campo: Matrícula */}
                <div class="mb-3">
                    <label for="text" class="form-label">Matrícula:</label>
                    <input type="text" class="form-control" placeholder="Matricula 123456789" />
                </div>
                {/* Campo: E-mail */}
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email:</label>
                    <input type="email" class="form-control" placeholder="name@example.com" />
                </div>
                {/* Campo: Data de nascimento */}
                <div class="mb-3">
                    <label for="" class="form-label">Data Nascimento:</label>
                    <input type="date" class="form-control" />
                </div>
                {/* Campo: Categoria do usuário */}
                <div>
                    <label for="" class="form-label">Categoria:</label>
                    <select class="form-select mb-3" aria-label="Categoria:">
                        <option selected></option>
                        <option value="1">Coordenador</option>
                        <option value="2">Professor</option>
                    </select>
                </div>
                {/* Campo: Login */}
                <div class="mb-3">
                    <label for="" class="form-label">Login:</label>
                    <input type="text" class="form-control" />
                </div>
                {/* Campo: Senha */}
                <div class="mb-3">
                    <label for="" class="form-label">Senha:</label>
                    <input type="password" class="form-control" />
                </div>
                <div class="buttons">
                    <button type="button" class="btn btn-danger">Salvar</button>
                    <button type="button" class="btn btn-danger">Pesquisar</button>
                </div>
            </div>
        </div>

    )
}

export default Cadastro_Usuario;