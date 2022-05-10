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
        close.addEventListener("click", this.btnClose);

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
        const btn = document.createElement("button");

        modal.id = "modal";
        modal.classList.add("modal");
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
        btn.innerText = "Cadastrar";
        btn.classList.add("form__button");
        btn.addEventListener("click", this.btnCadastrar);

        form.append(title, name, mail, photo, password, btn);
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
        const btn = document.createElement("button");

        modal.id = "modal";
        modal.classList.add("modal");
        form.classList.add("login");
        title.innerText = "Login";
        title.classList.add("login__title")
        mail.placeholder = "Email";
        mail.classList.add("form__input");
        password.placeholder = "Senha";
        password.classList.add("form__input");
        btn.innerText = "Login";
        btn.classList.add("form__button", "form__button--login");
        btn.addEventListener("click", this.btnLogar);

        form.append(title, mail, password, btn);
        modal.append(modalHeader, form);
        document.querySelector("main").appendChild(modal);
    }

    static btnClose(event) {
        event.preventDefault();

        this.closest("#modal").remove();
    }

    static btnCadastrar(event) {
        event.preventDefault();

        this.closest("#modal").childNodes[1].childNodes.forEach((element) => console.log(element));
    }

    static btnLogar(event) {
        event.preventDefault();

        console.log(this.closest("#modal").childNodes[1].childNodes[1].value);

        // this.closest("#modal").childNodes[1].childNodes.forEach((element) => console.log(element.value));
    }

    // static getInputs = (form) => this.closest("#modal").childNodes[1].childNodes.forEach((element) => console.log(element));
}

export default Modal;