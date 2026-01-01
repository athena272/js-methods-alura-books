import { BookModel } from "../model/BookModel.js";
import { applyDiscount } from "../services/applyDiscount.js";
import { calcTotalAvailable } from "../services/calcTotalAvailable.js";
import { booksState } from "../state/booksState.js";
import { renderBooks } from "../ui/renderBooks.js";
import { renderTotal } from "../ui/renderTotal.js";

const API_URL = "https://athena272.github.io/js-methods-alura-books/books.json";
const DEFAULT_DISCOUNT = 0.3;

function renderView({ container, totalContainer })
{
    renderBooks({ books: booksState.visibleBooks, container });

    const total = calcTotalAvailable(booksState.visibleBooks);
    renderTotal({ total, container: totalContainer });
}

export async function initBooks({ container, totalContainer })
{
    const response = await fetch(API_URL);
    const rawBooks = await response.json();

    booksState.allBooks = rawBooks.map(data => new BookModel(data));
    booksState.visibleBooks = applyDiscount(booksState.allBooks, DEFAULT_DISCOUNT);

    renderView({ container, totalContainer });
}

function handleAction({ event, container, totalContainer })
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

            renderView({ container, totalContainer });
        },

        available()
        {
            const available = booksState.allBooks.filter(book => book.isAvailable());
            booksState.visibleBooks = applyDiscount(available, DEFAULT_DISCOUNT);

            renderView({ container, totalContainer });
        },

        sort()
        {
            const sortKey = btn.dataset.sort; // price
            if (sortKey !== "price") return;

            booksState.visibleBooks = [...booksState.visibleBooks].sort((a, b) => a.price - b.price);
            renderView({ container, totalContainer });
        }
    };

    actions[action]?.();
}

export function bindBooksEvents({ container, totalContainer })
{
    document.querySelectorAll('.btn').forEach(btn =>
    {
        btn.addEventListener('click', (event) => handleAction({ event, container, totalContainer }));
    });
}