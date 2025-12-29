import { BookModel } from "./model/BookModel.js";
import { renderBooks } from "./ui/renderBooks.js";
const booksContainer = document.querySelector("#livros");

async function getBooks()
{
    const apiEndpoint = "https://athena272.github.io/js-methods-alura-books/books.json";
    const response = await fetch(apiEndpoint);
    const rawBooks = await response.json();
    // Aqui você converte os objetos "crus" em instâncias da classe
    const books = rawBooks.map((data) => new BookModel(data));

    renderBooks({ books, container: booksContainer });
}

getBooks();