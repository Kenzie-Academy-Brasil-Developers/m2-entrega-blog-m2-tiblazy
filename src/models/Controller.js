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
    }
}

export default Controller;