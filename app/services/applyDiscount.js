export function applyDiscount(books = [], discount = 0.3)
{
    const booksWithDiscount = books.map(book => book.withDiscount(discount));
    return booksWithDiscount;
}