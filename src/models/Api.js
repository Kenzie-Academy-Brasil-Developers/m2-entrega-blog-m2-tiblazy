import Modal from "./Modal.js";
import Post from "./Post.js";

class Api {
    static ROOT = "https://api-blog-m2.herokuapp.com/";
    static POST = `https://api-blog-m2.herokuapp.com/post?`;

    static async cadastrarUsuario(usuario) {
        const URL = `${this.ROOT}user/register`;

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario),
        })
        const data = await response.json();

        if (data.status !== "error") {
            window.location.href = "../pages/login.html";
        } else {
            Modal.container(`Erro no cadastro`, "Algum campo não foi respondido ou está incorreto");
        }

        return data;
    }

    static async logarUsuario(usuario) {
        const URL = `${this.ROOT}user/login`;

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario),
        })
        const data = await response.json();

        if (data.token) {
            localStorage.setItem("Token", data.token);
            localStorage.setItem("Id", data.userId);

            Modal.container(`Login Realizado`, `Seu login foi concluido`);

            window.location = "../pages/blog.html";
        } else {
            Modal.container(`Erro no login`, "Algum campo não foi respondido ou está incorreto");
        }

        return response;
    }

    static async listarUsuario() {
        const response = await fetch(`${Api.ROOT}user/${localStorage.getItem("Id")}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
        })
        const data = await response.json();

        return data;
    }

    static async novoPost(content) {
        const URL = `${this.ROOT}post`;

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`,
            },
            body: JSON.stringify(content),
        })
        const data = await response.json();

        return data;
    }

    static async paginarPosts(page = Api.POST) {

        const response = await fetch(page, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("Token")}`,
                },
                body: JSON.stringify(),
            })
            .then((response) => response.json())
            .then(response => response)
            .catch((error) => error);

        return response;
    }

    static async atualizarPost(updateContent) {
        const URL = `${this.ROOT}post/${localStorage.getItem("Id")}`;

        const response = await fetch(URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`,
            },
            body: JSON.stringify(updateContent)
        })

        // window.location = "../pages/editPost.html";

        return response;
    }

    static async deletarPost(deleteContent) {
        
        const URL = `${this.ROOT}post/${deleteContent}`;
        const respose = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("Token")}`,
            },
        })
    }
}

export default Api;