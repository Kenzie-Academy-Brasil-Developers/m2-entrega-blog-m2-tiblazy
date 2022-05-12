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
            const link = document.createElement("a");
            const lista = document.createElement("li");

            link.href = `${Api.POST}page=${index}`;
            page.innerText = index;
            page.classList.add("page");

            link.appendChild(page);
            lista.appendChild(link);
            document.getElementById("pages").appendChild(lista);
        }
    }
}

export default Pages;