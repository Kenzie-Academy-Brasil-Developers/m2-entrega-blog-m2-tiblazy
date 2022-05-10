import Form from "./Form.js";

// class Modal {

//     static header() {
//         const modalHeader = document.createElement("div");
//         const close = document.createElement("button");

//         modalHeader.classList.add("modal__header");
//         close.innerText = "X";
//         close.classList.add("modal__header__close");

//         modalHeader.appendChild(close);
//         return modalHeader;
//     }

//     static cadastrar() {
//         const modal = document.createElement("div");
//         const modalHeader = Modal.header();
//         const formContent = Form.cadastrar();

//         modal.classList.add("modal");

//         console.log(formContent);

//         modal.append(modalHeader, formContent);
//         // document.querySelector("main").appendChild(modal);
//     }

//     static login() {
//         const modal = document.createElement("div");
//         const modalHeader = Modal.header();
//         const formContent = Form.login();

//         modal.classList.add("modal");

//         modal.append(modalHeader, formContent);
//         // document.querySelector("main").appendChild(modal);
//     }
// }

class Modal {

    static header(data) {
        const modalHeader = document.createElement("div");
        const close = document.createElement("button");

        modalHeader.classList.add("modal__header", data);
        close.innerText = "X";
        close.classList.add("modal__header__close");
        close.addEventListener("click", this.close);

        modalHeader.appendChild(close);
        return modalHeader;
    }

    static cadastrar() {
        const modal = document.createElement("div");
        const modalHeader = Modal.header();
        const form = document.createElement("form");
        const title = document.createElement("h2");
        const name = document.createElement("input");
        const mail = document.createElement("input");
        const photo = document.createElement("input");
        const password = document.createElement("input");
        const login = document.createElement("button");

        modal.classList.add("modal");
        modal.id = "modal";
        form.classList.add("cadastro");
        title.innerText = "Cadastro";
        title.classList.add("cadastro__title")
        name.placeholder = "User";
        name.classList.add("form__input");
        mail.placeholder = "Mail";
        mail.classList.add("form__input");
        photo.placeholder = "Link";
        photo.classList.add("form__input");
        password.placeholder = "Password";
        password.classList.add("form__input");
        login.innerText = "Cadastrar";
        login.classList.add("form__button");

        form.append(title, name, mail, photo, password, login);
        modal.append(modalHeader, form);
        document.querySelector("main").appendChild(modal);
    }

    static login() {
        const modal = document.createElement("div");
        const modalHeader = Modal.header("modal__header__close--login");
        const form = document.createElement("form");
        const title = document.createElement("h2");
        const mail = document.createElement("input");
        const password = document.createElement("input");
        const login = document.createElement("button");

        modal.classList.add("modal");
        form.classList.add("login");
        title.innerText = "Login";
        title.classList.add("login__title")
        mail.placeholder = "Email";
        mail.classList.add("form__input");
        password.placeholder = "Senha";
        password.classList.add("form__input");
        login.innerText = "Login";
        login.classList.add("form__button", "form__button--login");

        form.append(title, mail, password, login);
        modal.append(modalHeader, form);
        document.querySelector("main").appendChild(modal);
    }

    static close(event) {
        event.preventDefault();

        this.closest("#modal").remove();
    }
}

export default Modal;