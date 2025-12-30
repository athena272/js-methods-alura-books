export function applyDescont(books = [])
{
    const descont = 0.3;
    const booksWithDescont = books.map(book => {...book, price: 3});
    return booksWithDescont;
}