import Api from "./Api.js";
import Post from "./Post.js";

class Pages {

    static async posts(link = "https://api-blog-m2.herokuapp.com/post?") {
        const listPost = await Api.paginarPosts(link);

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
            page.addEventListener("click", Pages.link);

            link.appendChild(page);
            lista.appendChild(link);
            document.getElementById("pages").appendChild(lista);
        }
    }

    static link(event) {
        event.preventDefault();
        const listaPosts = document.querySelectorAll("#post");
        listaPosts.forEach(ele => ele.remove());

        Pages.posts(this.closest("a").href);
    }
}

export default Pages;