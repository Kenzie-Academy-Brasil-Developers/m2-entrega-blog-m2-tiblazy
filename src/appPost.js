import Api from "./models/Api.js";
import Pages from "./models/Pages.js";
import Post from "./models/Post.js";

const cliente = await Api.listarUsuario()
const {
    avatarUrl,
    username,
} = cliente;

Post.header(avatarUrl, username);
Post.new();
Pages.posts();

// listPost.data.forEach(({
//     id,
//     post,
//     createdAt,
//     updatedAt,
//     owner
// }) => console.log(new Pages(id, post, createdAt, updatedAt, owner.avatarUrl, owner.username)));
Pages.pages();