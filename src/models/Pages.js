import Api from "./Api.js";
import Post from "./Post.js";

class Pages {

    static async posts() {
        const listPost = await Api.paginarPosts();

        listPost.data.forEach(({
            id,
            post,
            createdAt,
            owner
        }) => Post.message(owner.avatarUrl, owner.username, post, id, owner.id, createdAt));
    }

    static async pages() {
        const pages = await Api.paginarPosts();
        const initialPage = 1;
        const lastPage = pages.lastPage;

        for (let index = initialPage; index <= lastPage; index++) {
            const page = document.createElement("button");

            page.innerText = index;
            page.classList.add("page");

            page.addEventListener("click", async () => {
                const response = await fetch(`${Api.POST}page=${index}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("Token")}`,
                    },
                    body: JSON.stringify(),
                })
                console.log(localStorage.getItem("Token"))
                window.location = `${Api.POST}page=${index}`;
            });

            document.getElementById("pages").appendChild(page);
        }
    }
}

export default Pages;