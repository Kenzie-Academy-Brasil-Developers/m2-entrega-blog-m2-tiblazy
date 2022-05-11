import Modal from "./Modal.js";
import Post from "./Post.js";
import User from "./User.js"

class Api {
    static ROOT = "https://api-blog-m2.herokuapp.com/";
    static userInfo = {
        token: "",
        id: ""
    };

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
        }

        Modal.container(`Erro no cadastro`, "Algum campo não foi respondido ou está incorreto");
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
            Api.userInfo.token = data.token
            Api.userInfo.id = data.userId
            localStorage.setItem("Token", response.token);
            localStorage.setItem("Id", response.userId);

            Modal.container(`Login Realizado`, `Seu login foi concluido`);
            const usuario = await Api.listarUsuario();

            console.log(usuario.avatarUrl)
            console.log(usuario.username)

            Post.header(usuario.avatarUrl, usuario.username);
            // window.location.href = "../pages/blog.html";
        } else {
            Modal.container(`Erro no login`, "Algum campo não foi respondido ou está incorreto");
        }
        return response;
    }

    static async listarUsuario() {
        const response = await fetch(`${Api.ROOT}user/${Api.userInfo.id}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${Api.userInfo.token}`
            },
        })
        const data = await response.json();
        // const {
        //     avatarUrl,
        //     username
        // } = await data

        // console.log(username);
        // console.log(avatarUrl);
        // Post.header(avatarUrl, username);

        return data;
    }

    static async novoPost(content) {
        const URL = `${this.ROOT}post/${Api.userInfo.id}`;

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${Api.userInfo.token}`,
            },
            body: JSON.stringify(content),
        })

        // console.log(await response.json());
        const data = await response.json();
        // console.log(data);

        return Post.message("1", undefined, data);
    }

    static async paginarPosts(id) {
        const URL = `${this.ROOT}post?page=${id}`;

        const response = await fetch(URL, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${Api.userInfo.token}`,
                },
                body: JSON.stringify(id),
            })
            .then((response) => response.json())
            .then(response => response)
            .catch((error) => error);

        return response;
    }

    static async atualizarPost(updateContent) {
        const URL = `${this.ROOT}post/${Api.userInfo.id}`;

        const response = await fetch(URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${Api.userInfo.token}`,
            },
            body: JSON.stringify(updateContent)
        })

        return response;
    }

    static async deletarPost() {
        const URL = `${this.ROOT}post/${Api.userInfo.id}`;
        const respose = await fetch(URL, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${Api.userInfo.token}`,
            },
        })
    }
}

export default Api;