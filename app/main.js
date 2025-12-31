import { BookModel } from "./model/BookModel.js";
import { applyDiscount } from "./services/applyDiscount.js";
import { renderBooks } from "./ui/renderBooks.js";
const booksContainer = document.querySelector("#livros");

async function getBooks()
{
    const apiEndpoint = "https://athena272.github.io/js-methods-alura-books/books.json";
    const response = await fetch(apiEndpoint);
    const rawBooks = await response.json();
    // Aqui você converte os objetos "crus" em instâncias da classe
    const books = rawBooks.map((data) => new BookModel(data));
    const booksWithDescont = applyDiscount(books);
    console.log("🚀 ~ getBooks ~ booksWithDescont:", booksWithDescont);

    renderBooks({ books: booksWithDescont, container: booksContainer });
}

getBooks();