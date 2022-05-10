class Api {
    static ROOT = "https://api-blog-m2.herokuapp.com/";

    static async cadastrarUsuario(usuario) {
        const response = await fetch(`${this.ROOT}user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario),
            })
            .then((response) => response.json())
            .then(response => response)
            .catch((error) => error);

        return response;
    }

    static async logarUsuario(usuario) {
        const response = await fetch(`${this.ROOT}user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario),
            })
            .then((response) => response.json())
            .then(response => response)
            .catch((error) => error);

        // const user = JSON.parse(localStorage.getItem(response))
        const id = response.userId;
        const token = response.token;

        console.log(response)
        console.log(id);
        console.log(token);

        return response;
    }

    static async novoPost(content) {
        const response = await fetch(`${this.ROOT}post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2ZTFhNjU5LWZjNDktNGM1ZS1iMmU0LWVlMjg2ZTRjOTAxZiIsImlhdCI6MTY0NzA5NzYyOSwiZXhwIjoxNjQ3MTg0MDI5fQ.qNEGcvnVZy9lvyYDbCzUMxdj-vi4nEsLHHLnsS3TTQg",
            },
            body: JSON.stringify(content),
        })
    }

    static async paginarPosts(id) {
        const response = await fetch(`${this.ROOT}post?page=${id}`, {
                method: "GET",
                headers: {
                    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2ZTFhNjU5LWZjNDktNGM1ZS1iMmU0LWVlMjg2ZTRjOTAxZiIsImlhdCI6MTY0NzA5NzYyOSwiZXhwIjoxNjQ3MTg0MDI5fQ.qNEGcvnVZy9lvyYDbCzUMxdj-vi4nEsLHHLnsS3TTQg",
                },
                body: JSON.stringify(id),
            })
            .then((response) => response.json())
            .then(response => response)
            .catch((error) => error);

        return response;
    }

    static async atualizarPost(updateContent) { // ?9cc3c5e3-83df-4201-b1f3-87efae81fa96 correto ?
        const response = await fetch(`${this.ROOT}post/9cc3c5e3-83df-4201-b1f3-87efae81fa96`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2ZTFhNjU5LWZjNDktNGM1ZS1iMmU0LWVlMjg2ZTRjOTAxZiIsImlhdCI6MTY0NzA5NzYyOSwiZXhwIjoxNjQ3MTg0MDI5fQ.qNEGcvnVZy9lvyYDbCzUMxdj-vi4nEsLHHLnsS3TTQg",
            },
            body: JSON.stringify(updateContent)
        })

        return response;
    }

    static async deletarPost() { // ?776be59f-94cc-4313-a891-dc697259b72a
        const respose = await fetch(`${this.ROOT}post/776be59f-94cc-4313-a891-dc697259b72a`, {
            method: "DELETE",
            headers: {
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2ZTFhNjU5LWZjNDktNGM1ZS1iMmU0LWVlMjg2ZTRjOTAxZiIsImlhdCI6MTY0NzA5NzYyOSwiZXhwIjoxNjQ3MTg0MDI5fQ.qNEGcvnVZy9lvyYDbCzUMxdj-vi4nEsLHHLnsS3TTQg"
            },
        })
    }
}

export default Api;