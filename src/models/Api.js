import Modal from "./Modal.js";
import Post from "./Post.js";

class Api {
    static ROOT = "https://api-blog-m2.herokuapp.com/";

    static async cadastrarUsuario(usuario) {
        const URL = `${this.ROOT}user/register`;

        const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario),
            })
            .then((response) => response.json())
            .then((response) => response)
            .catch((error) => error);

        return response;
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
            .then((response) => response.json())
            .then((response) => response)
            .catch((error) => console.error(error));

        if (response.token) {
            localStorage.setItem("Token", response.token);
            localStorage.setItem("Id", response.userId);
            console.log(response.userId);

            Modal.container(`Login Realizado`, `Seu login foi concluido`);

            // window.location.href = "../pages/blog.html";
            // Post.header(response.avatarUrl, response.username);
        } else {
            Modal.container(`Erro no login`, "Algum campo não foi respondido ou está incorreto");
        }

        return response;
    }

    static async novoPost(content) {
        const URL = `${this.ROOT}post/${localStorage.getItem("Id")}`; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2ZTFhNjU5LWZjNDktNGM1ZS1iMmU0LWVlMjg2ZTRjOTAxZiIsImlhdCI6MTY0NzA5NzYyOSwiZXhwIjoxNjQ3MTg0MDI5fQ.qNEGcvnVZy9lvyYDbCzUMxdj-vi4nEsLHHLnsS3TTQg
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("Token")}`,
            },
            body: JSON.stringify(content),
        })

        console.log(await response.json());
        const data = await response.json();
        // console.log(data);

        return Post.message(null, null, data);
    }

    static async paginarPosts(id) {
        const URL = `${this.ROOT}post?page=${id}`;

        const response = await fetch(URL, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("Token")}`,
                },
                body: JSON.stringify(id),
            })
            .then((response) => response.json())
            .then(response => response)
            .catch((error) => error);

        return response;
    }

    static async atualizarPost(updateContent) {
        const URL = `${this.ROOT}post/${localStorage.getItem("Id")}`;
        // const URL = `${this.ROOT}post/9cc3c5e3-83df-4201-b1f3-87efae81fa96`;

        const response = await fetch(URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("Token")}`,
            },
            body: JSON.stringify(updateContent)
        })

        return response;
    }

    static async deletarPost() {
        const URL = `${this.ROOT}post/${localStorage.getItem("Id")}`;
        const respose = await fetch(URL, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("Token")}`,
            },
        })
    }
}

export default Api;