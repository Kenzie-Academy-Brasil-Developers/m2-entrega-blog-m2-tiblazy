class Form {

    static cadastrar() {
        const form = document.createElement("form");
        const title = document.createElement("h2");
        const name = document.createElement("input");
        const mail = document.createElement("input");
        const photo = document.createElement("input");
        const password = document.createElement("input");
        const login = document.createElement("button");

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

        console.log(form);
        form.append(title, name, mail, photo, password, login);
        document.querySelector("main").appendChild(form);
    }

    static login() {
        const form = document.createElement("form");
        const title = document.createElement("h2");
        const mail = document.createElement("input");
        const password = document.createElement("input");
        const login = document.createElement("button");

        form.classList.add("login");
        title.innerText = "Login";
        title.classList.add("cadastro__title")
        mail.placeholder = "Email";
        mail.classList.add("form__input");
        password.placeholder = "Senha";
        password.classList.add("form__input");
        login.innerText = "Login";
        login.classList.add("form__button");

        console.log(form);
        form.append(title, mail, password, login);
        document.querySelector("main").appendChild(form);
    }
}

export default Form;