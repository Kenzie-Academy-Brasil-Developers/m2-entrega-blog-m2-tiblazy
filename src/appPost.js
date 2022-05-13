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
await Pages.posts();
Pages.pages();