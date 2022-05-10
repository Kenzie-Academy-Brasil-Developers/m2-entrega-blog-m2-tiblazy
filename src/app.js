import Modal from "./models/Modal.js"; // chama o form
// import Form from "./models/Form.js"; // chama o post
import Post from "./models/Post.js"; // se tiver logado aparece


Modal.cadastrar();
Modal.login();

// Form.register();
// Form.login();

Post.header();
Post.new();
Post.message();