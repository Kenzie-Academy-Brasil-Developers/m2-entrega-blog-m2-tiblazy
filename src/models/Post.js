import data from "../javascript/teste.js";

class Post {

    static header() {
        const divUser = document.createElement("div");
        const photo = document.createElement("img");
        const user = document.createElement("p");
        const logout = document.createElement("button");

        divUser.classList.add("header__user");
        photo.src = "https://c4.wallpaperflare.com/wallpaper/400/646/349/digital-digital-art-artwork-3d-night-hd-wallpaper-preview.jpg";
        photo.classList.add("user__photo");
        user.innerText = "Gatinho FOFO";
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

    static message() {
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
        photo.src = "https://c4.wallpaperflare.com/wallpaper/400/646/349/digital-digital-art-artwork-3d-night-hd-wallpaper-preview.jpg";
        photo.classList.add("post__photo");
        user.innerText = "Gatinho FOFO";
        user.classList.add("post__user");
        divInteractions.id = "container" // trocar por id futuramente
        container.classList.add("post__container");
        message.innerText = data[0];
        message.classList.add("container__message");
        divInteractions.classList.add("post__interactions");
        edit.classList.add("fas", "fa-edit", "interactions__edit");
        edit.addEventListener("click", this.edit);
        remove.classList.add("fa-solid", "fa-trash", "interactions__remove");
        remove.addEventListener("click", this.remove);

        container.appendChild(message);
        divUser.append(user, container);
        divInteractions.append(edit, remove);

        if (screen.width > 767) {
            datePost.innerText = "22/22/2022";
            datePost.classList.add("interactions__date");
            divInteractions.append(edit, remove, datePost);
        } else {
            divInteractions.append(edit, remove);
        }

        article.append(photo, divUser, divInteractions);
        document.querySelector("main").appendChild(article);
    }

    static logout(event) {
        event.preventDefault();

        console.log(this);
    }

    static add(event) {
        event.preventDefault();
        const newMessage = this.closest("article").childNodes[0].value; // via API newPost

        if (newMessage.length > 0) {
            console.log("Nãao está vazia");
        } else {
            alert("error")
        }
    }

    static edit(event) {
        event.preventDefault();
        const editPost = this.closest("article").childNodes[1].childNodes[1].childNodes[0]; // via API update
    }

    static remove(event) {
        event.preventDefault();
        const removePost = this.closest("article").remove() // via API delete
    }
}

export default Post;