import Api from "./Api.js";

class Form {

    static container(callback, link) {
        const background = document.createElement("div");
        const formHeader = this.header(link);
        const formContent = callback;

        background.append(formHeader, formContent);
        background.id = "background";

        document.querySelector("main").appendChild(background);
    }

    static header(link) {
        const formHeader = document.createElement("div");
        const formAnchor = document.createElement("a");
        const formClose = document.createElement("button");

        formHeader.classList.add("form__header");
        formHeader.innerHTML =
            `
            <a href="${link}"> <button class="form__header__close">X</button></a>
        `
        formClose.addEventListener("click", this.btnClose);

        return formHeader;
    }

    static cadastrar() {
        const form = document.createElement("form");
        const title = document.createElement("h2");
        const name = document.createElement("input");
        const mail = document.createElement("input");
        const photo = document.createElement("input");
        const password = document.createElement("input");
        const btn = document.createElement("button");

        form.id = "form";
        form.classList.add("form");
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
        return form;
    }

    static login() {
        const form = document.createElement("form");
        const title = document.createElement("h2");
        const mail = document.createElement("input");
        const password = document.createElement("input");
        const btn = document.createElement("button");

        form.id = "form";
        form.classList.add("form");
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
        return form
    }

    static btnClose(event) {
        event.preventDefault();

        this.closest("#background").remove();
    }

    static btnCadastrar(event) {
        event.preventDefault();
        const user = this.closest("#form").childNodes[1].value;
        const mail = this.closest("#form").childNodes[2].value;
        const img = this.closest("#form").childNodes[3].value;
        const pass = this.closest("#form").childNodes[4].value;

        const newUser = {
            username: user,
            email: mail,
            avatarUrl: img,
            password: pass
        }

        console.log(newUser)
        this.closest("#form").childNodes.forEach((element) => element.value = "");
        Api.cadastrarUsuario(newUser);
    }

    static btnLogar(event) {
        event.preventDefault();

        const mail = this.closest("#form").childNodes[1].value;
        const pass = this.closest("#form").childNodes[2].value;

        const user = {
            email: mail,
            password: pass
        }

        this.closest("#form").childNodes.forEach((element) => element.value = "");
        Api.logarUsuario(user)
    }
}

export default Form;