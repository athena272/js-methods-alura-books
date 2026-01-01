import { bindBooksEvents, initBooks } from "./controllers/booksController.js";

const booksContainer = document.querySelector('#livros');

await initBooks({ container: booksContainer });
bindBooksEvents({ container: booksContainer });
