//import axios from "axios";

class LoginService {
  getAuthenticatedData() {
    const data = sessionStorage.getItem("user-data");
    return data ? JSON.parse(data) : null;
  }

  isAuthenticated() {
    return this.getAuthenticatedData() !== null;
  }

  logout() {
    sessionStorage.removeItem("user-data");
  }
// Função para verificar o Login (atualmente o Login e padrão "admin")
  login(username, password, onSuccess, onError, navigate) {
    // Simulação de login local
    if (username === "admin" && password === "admin") {
      const fakeUserData = {
        username: "admin",
        role: "administrador"
      };

      sessionStorage.setItem("user-data", JSON.stringify(fakeUserData));
      onSuccess();

      if (navigate) {
        navigate("/dashBancas");
      }
    } else {
      onError("Usuário ou senha inválidos!");
    }

    // Código original comentado, pois está sem conexão com o back-end
    /*
    const formData = new URLSearchParams();
    formData.append("login", username);
    formData.append("senha", password);

    axios
      .post("http://localhost:8085/gtcc/auth/login", formData)
      .then((response) => {
        if (response.status !== 200) {
          onError(`Erro na autenticação: ${response.statusText}`);
          return;
        }
        sessionStorage.setItem("user-data", JSON.stringify(response.data));
        onSuccess();

        if (navigate) {
          navigate("/dashBancas"); // Garante que navigate existe antes de chamar
        }
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "Usuário/Senha Inválidos!";
        onError(errorMessage);
      });
      */
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LoginService();