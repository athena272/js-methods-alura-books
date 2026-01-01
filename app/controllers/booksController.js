import { BookModel } from "../model/BookModel.js";
import { applyDiscount } from "../services/applyDiscount.js";
import { booksState } from "../state/booksState.js";
import { renderBooks } from "../ui/renderBooks.js";

const API_URL = "https://athena272.github.io/js-methods-alura-books/books.json";
const DEFAULT_DISCOUNT = 0.3;

export async function initBooks({ container })
{
    const response = await fetch(API_URL);
    const rawBooks = await response.json();

    booksState.allBooks = rawBooks.map(data => new BookModel(data));
    booksState.visibleBooks = applyDiscount(booksState.allBooks, DEFAULT_DISCOUNT);

    renderBooks({ books: booksState.visibleBooks, container });
}

function handleAction({ event, container })
{
    const btn = event.currentTarget;
    console.log("🚀 ~ handleAction ~ btn:", btn);

    const action = btn.dataset.action; // "filter" | "available" | "sort"
    console.log("🚀 ~ onButtonClick ~ action:", action);
    if (!action) return;

    const actions = {
        filter()
        {
            const category = btn.dataset.category; // "front-end" | "back-end" | "data"
            console.log("🚀 ~ handleAction ~ category:", category);
            if (!category) return;

            const filtered = booksState.allBooks.filter(book => book.category === category);
            booksState.visibleBooks = applyDiscount(filtered, DEFAULT_DISCOUNT);

            renderBooks({ books: booksState.visibleBooks, container });
        },

        available()
        {
            const available = booksState.allBooks.filter(book => book.isAvailable());
            booksState.visibleBooks = applyDiscount(available, DEFAULT_DISCOUNT);

            renderBooks({ books: booksState.visibleBooks, container });
        },

        sort()
        {
            const sortKey = btn.dataset.sort; // price
            if (sortKey !== "price") return;

            booksState.visibleBooks = [...booksState.visibleBooks].sort((a, b) => a.price - b.price);
            renderBooks({ books: booksState.visibleBooks, container });
        }
    };

    actions[action]?.();
}

export function bindBooksEvents({ container })
{
    document.querySelectorAll('.btn').forEach(btn =>
    {
        btn.addEventListener('click', (event) => handleAction({ event, container }));
    });
}