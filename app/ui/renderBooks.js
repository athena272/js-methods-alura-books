export function renderBooks({ books, container })
{
    container.innerHTML = books.map(book => bookToHTML(book)).join("");
}

function bookToHTML(book)
{
    const unavailableClass = book.isAvailable() ? "" : "indisponivel";

    return `
    <div class="livro">
      <img
        class="livro__imagens ${unavailableClass}"
        src="${book.image}"
        alt="${escapeHtml(book.alt)}"
      />
      <h2 class="livro__titulo">${escapeHtml(book.title)}</h2>
      <p class="livro__descricao">${escapeHtml(book.author)}</p>
      <p class="livro__preco">${book.formattedPrice()}</p>
      <div class="tags">
        <span class="tag">${escapeHtml(book.category)}</span>
      </div>
    </div>
  `;
}

function escapeHtml(text)
{
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}