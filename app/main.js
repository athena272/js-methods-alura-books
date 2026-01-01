import { bindBooksEvents, initBooks } from "./controllers/booksController.js";

const booksContainer = document.querySelector('#livros');
const totalContainer = document.querySelector('#valor');

await initBooks({ container: booksContainer, totalContainer });
bindBooksEvents({ container: booksContainer, totalContainer });
