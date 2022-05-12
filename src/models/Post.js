import Api from "./Api.js";
import Modal from "./Modal.js";

class Post {
    static header(avatarUrl, username) {
        const divUser = document.createElement("div");
        const photo = document.createElement("img");
        const user = document.createElement("p");
        const logout = document.createElement("button");

        divUser.classList.add("header__user");
        photo.src = avatarUrl;
        photo.classList.add("user__photo");
        user.innerText = username;
        user.classList.add("user__nick");
        logout.innerText = "Logout";
        logout.classList.add("header__logout");
        logout.addEventListener("click", this.logout);

        divUser.append(photo, user);
        document.querySelector("header").append(divUser, logout);
    }

    static new() {
        const article = document.createElement("article");
        const message = document.createElement("textarea");
        const add = document.createElement("button");

        article.classList.add("new");
        message.placeholder = "Comece seu post incrível";
        message.classList.add("new__message");
        message.rows = 6;
        message.cols = add.classList.add("fa-solid", "fa-plus");
        add.classList.add("new__add");
        add.addEventListener("click", this.add);

        article.append(message, add);
        document.querySelector("main").appendChild(article);
    }

    static message(avatarUrl, username, message, idMessage, idUser, createdAt) {
        const article = document.createElement("article");
        const photo = document.createElement("img");
        const divUser = document.createElement("div");
        const user = document.createElement("p");
        const container = document.createElement("div");
        const msg = document.createElement("p");
        const divInteractions = document.createElement("div");
        const edit = document.createElement("button");
        const remove = document.createElement('button');
        const datePost = document.createElement("span");

        article.classList.add("post");
        photo.src = avatarUrl;
        photo.classList.add("post__photo");
        user.innerText = username;
        user.classList.add("post__user");
        divInteractions.id = "container";
        container.classList.add("post__container");
        msg.innerText = message;
        msg.classList.add("container__message");
        divInteractions.classList.add("post__interactions");

        if (idUser === localStorage.getItem("Id")) {
            edit.id = idMessage;
            edit.classList.add("fas", "fa-edit", "interactions__edit");
            edit.addEventListener("click", this.edit);
            remove.id = idMessage;
            remove.classList.add("fa-solid", "fa-trash", "interactions__remove");
            remove.addEventListener("click", this.remove);
            divInteractions.append(edit, remove);

            container.appendChild(msg);
            divUser.append(user, container);
            datePost.innerText = createdAt;
            datePost.classList.add("interactions__date");

            divInteractions.append(edit, remove, datePost);
            article.append(photo, divUser, divInteractions);
            document.querySelector("main").appendChild(article);
        }

        divInteractions.append(edit, remove);

        container.appendChild(msg);
        divUser.append(user, container);
        datePost.innerText = createdAt;
        datePost.classList.add("interactions__date");

        divInteractions.append(edit, remove, datePost);
        article.append(photo, divUser, divInteractions);
        document.querySelector("main").appendChild(article);
    }

    static logout(event) {
        event.preventDefault();

        localStorage.removeItem("Token");
        localStorage.removeItem("Id");
        window.location.href = "../pages/login.html";
    }

    static add(event) {
        event.preventDefault();
        const newMessage = this.closest("article").childNodes[0].value;
        const message = {
            content: newMessage
        }

        if (newMessage.length > 0) {
            Modal.container("Post criado", newMessage);
            this.closest("article").childNodes[0].value = "";

            Api.novoPost(message);
        } else {
            Modal.container("Post sem conteúdo", "Tente novamente");
        }
    }

    static edit(event) {// ??
        event.preventDefault();
        const editPost = this.closest("article").childNodes[1].childNodes[1].childNodes[0];

        // Api.atualizarPost(editPost);
    }

    static async remove(event) {
        event.preventDefault();
        const removePost = this.closest("article > #container").childNodes[1].id;

        await Api.deletarPost(removePost);
    }
}

export default Post;