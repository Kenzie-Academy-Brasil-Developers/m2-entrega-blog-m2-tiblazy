import data from "../javascript/teste.js";
import Api from "./Api.js";
import Modal from "./Modal.js";

class Post {

    static header(avatarUrl, username) {
        const divUser = document.createElement("div");
        const photo = document.createElement("img");
        const user = document.createElement("p");
        const logout = document.createElement("button");

        divUser.classList.add("header__user");
        photo.src = avatarUrl //"https://c4.wallpaperflare.com/wallpaper/400/646/349/digital-digital-art-artwork-3d-night-hd-wallpaper-preview.jpg";
        photo.classList.add("user__photo");
        user.innerText = username //"Gatinho FOFO";
        user.classList.add("user__nick");
        logout.innerText = "Logout";
        logout.classList.add("header__logout");
        logout.addEventListener("click", this.logout);

        divUser.append(photo, user);
        document.getElementById("header").append(divUser, logout);
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

    static message(avatarUrl, username, content) {
        const article = document.createElement("article");
        const photo = document.createElement("img");
        const divUser = document.createElement("div");
        const user = document.createElement("p");
        const container = document.createElement("div");
        const message = document.createElement("p");
        const divInteractions = document.createElement("div");
        const edit = document.createElement("button");
        const remove = document.createElement('button');
        const datePost = document.createElement("span");

        article.classList.add("post");
        photo.src = avatarUrl //"https://c4.wallpaperflare.com/wallpaper/400/646/349/digital-digital-art-artwork-3d-night-hd-wallpaper-preview.jpg";
        photo.classList.add("post__photo");
        user.innerText = username // "Gatinho FOFO";
        user.classList.add("post__user");
        divInteractions.id = "container" // trocar por id futuramente
        container.classList.add("post__container");
        message.innerText = content//data[0];
        message.classList.add("container__message");
        divInteractions.classList.add("post__interactions");
        edit.classList.add("fas", "fa-edit", "interactions__edit");
        edit.addEventListener("click", this.edit);
        remove.classList.add("fa-solid", "fa-trash", "interactions__remove");
        remove.addEventListener("click", this.remove);

        container.appendChild(message);
        divUser.append(user, container);
        divInteractions.append(edit, remove);
        datePost.innerText = "22/22/2022";
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
        const newMessage = this.closest("article").childNodes[0].value; // via API newPost

        if (newMessage.length > 0) {
            Modal.container("Post criado", newMessage);
            this.closest("article").childNodes[0].value = "";

            Api.novoPost(newMessage);
        } else {
            Modal.container("Post sem conteúdo", "Tente novamente");
        }
    }

    static edit(event) {
        event.preventDefault();
        const editPost = this.closest("article").childNodes[1].childNodes[1].childNodes[0]; // via API update

        // return Api.atualizarPost(editPost);
    }

    static remove(event) {
        event.preventDefault();
        const removePost = this.closest("article").remove() // via API delete

        // return Api.deletarPost(removePost);
    }
}

export default Post;