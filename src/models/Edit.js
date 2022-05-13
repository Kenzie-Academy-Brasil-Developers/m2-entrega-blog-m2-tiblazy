import Api from "./Api.js";
import Modal from "./Modal.js";

class Edit {

    static edit() {
        const modal = document.createElement("article");
        const modalHeader = Modal.header("Altere sua mensagem");
        const modalContainer = document.createElement("div");
        const message = document.createElement("textarea");
        const modalFooter = Edit.footer();

        modal.classList.add("modal");
        modalContainer.classList.add("modal__container");
        message.classList.add("container__content", "container__content--edit");

        modalContainer.appendChild(message)
        modal.append(modalHeader, modalContainer, modalFooter);
        document.querySelector("main").appendChild(modal);
    }

    static message(event) {
        event.preventDefault();
        const idPost = this.closest("article").id;
        const message = this.closest("article").children[1].children[0].value;

        if (message !== "") {
            const newMessage = {
                newContent: this.closest("article").children[1].children[0].value
            }

            Api.atualizarPost(newMessage);
            window.location.reload();
        }
    }

    static footer() {
        const modalFooter = document.createElement("section");
        const modalBtn = document.createElement("button");

        modalFooter.classList.add("modal__footer");
        modalBtn.classList.add("footer__button");
        modalBtn.innerText = "Confirmar";
        modalBtn.addEventListener("click", this.message);

        modalFooter.appendChild(modalBtn);
        return modalFooter;
    }
}

export default Edit;