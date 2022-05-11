import Api from "./Api.js";
import Modal from "./Modal.js";

class Controller {
    static lockInput() {
        document.querySelectorAll('form > input').forEach((element) => element.disabled = true);
    }

    static unlockInput() {
        document.querySelectorAll('form > input').forEach((element) => element.removeAttribute('disabled'));
    }

    static checkInput(data, content) {
        for (const undefined in data) {
            if (data[undefined] === "") {
                Controller.lockInput();
                Modal.container(`Erro no ${content}`, "Algum campo não foi respondido ou está incorreto");
                return false;
            }
        }
        return Controller.userStep(data, content);
    }

    static userStep(data, content) { // passando mesmo se valores não satisfazerem a API
        if (content === "Cadastro" && Api.cadastrarUsuario(data)) {
            // setTimeout(() => {
            //     window.location.href = "../pages/login.html";
            // }, 5000);
            return Modal.container(`${content} Realizado`, `Seu ${content.toLowerCase()} foi concluido`);
        } else if (content === "Login" && Api.logarUsuario(data)) {
            // setTimeout(() => {
            //     window.location.href = "../pages/blog.html";
            // }, 5000);
            return Modal.container(`${content} Realizado`, `Seu ${content.toLowerCase()} foi concluido`);
        }
    }
}

export default Controller;