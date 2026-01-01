export function calcTotalAvailable(books = [])
{
    return books
    .filter(book => book.isAvailable)
    .reduce((sum, book) => sum + book.price, 0);
}