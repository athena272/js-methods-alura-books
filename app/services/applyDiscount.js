export function applyDiscount(books = [])
{
    const descont = 0.3;
    // const booksWithDescont = books.map(book => {...book, prince: book.applyDescont(descont)});
    const booksWithDescont = books.map(book => book.withDiscount(descont));
    return booksWithDescont;
}