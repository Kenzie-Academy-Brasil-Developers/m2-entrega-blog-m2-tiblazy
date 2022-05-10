class Modal {

    static header(title) {
        const modalHeader = document.createElement("div");
        const modalTitle = document.createElement("h2");

        modalHeader.classList.add("modal__header");
        modalTitle.innerText = title;
        modalTitle.classList.add("header__title");

        modalHeader.appendChild(modalTitle);
        return modalHeader;
    }
    static content() {
        const container = document.createElement("div");
        const content = document.createElement("p");

        container.classList.add("modal__container");
        content.classList.add("container__content");

        container.appendChild(content);
        return container;
    }
    static footer() {
        const modalFooter = document.createElement("div");
        const modalBtn = document.createElement("button");

        modalFooter.classList.add("modal__footer");
        modalBtn.classList.add("footer_button");
        modalBtn.addEventListener("click", this.close);

        modalFooter.appendChild(modalBtn);
        return modalFooter;
    }

    static TemplateError() {
        const modal = document.createElement("div");
        const modalHeader = this.header();
        const modalContent = this.content();
        const modalFooter = this.footer();

        modal.append(modalHeader, modalContent, modalFooter);
        document.querySelector("main").appendChild(modal);
    }

    static close(event){
        event.preventDefault();

        console.log(this);
    }
}