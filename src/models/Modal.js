import Controller from "./Controller.js";

class Modal {

    static container(title, message) {
        const modal = document.createElement("article");
        const modalHeader = this.header(title);
        const modalContent = this.content(message);
        const modalFooter = this.footer();

        modal.classList.add("modal");

        modal.append(modalHeader, modalContent, modalFooter);
        document.querySelector("main").appendChild(modal);
    }

    static header(title) {
        const modalHeader = document.createElement("section");
        const modalTitle = document.createElement("h2");

        modalHeader.classList.add("modal__header");
        modalTitle.innerText = title;
        modalTitle.classList.add("header__title");

        modalHeader.appendChild(modalTitle);
        return modalHeader;
    }

    static content(message) {
        const container = document.createElement("section");
        const content = document.createElement("p");

        container.classList.add("modal__container");
        content.classList.add("container__content");
        content.innerText = message;

        container.appendChild(content);
        return container;
    }

    static footer() {
        const modalFooter = document.createElement("section");
        const modalBtn = document.createElement("button");

        modalFooter.classList.add("modal__footer");
        modalBtn.classList.add("footer__button");
        modalBtn.innerText = "Confirmar";
        modalBtn.addEventListener("click", this.close);

        modalFooter.appendChild(modalBtn);
        return modalFooter;
    }

    static close(event) {
        event.preventDefault();
        Controller.unlockInput();
        this.closest(".modal").remove();
    }
}

export default Modal;