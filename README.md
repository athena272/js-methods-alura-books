# 📚 AluraBooks --- JavaScript Array Methods

Projeto desenvolvido para estudo prático dos principais **métodos de
array do JavaScript** (`map`, `filter`, `reduce`, `sort`) aplicados a um
cenário real de listagem de livros.

O foco do projeto é **organização de código**, **separação de
responsabilidades** e **boas práticas em JavaScript moderno (ES
Modules)**, sem uso de frameworks.

------------------------------------------------------------------------

## 🧠 Conceitos trabalhados

-   `map` → transformação de dados
-   `filter` → filtragem por categoria e disponibilidade
-   `reduce` → cálculo de valores agregados
-   `sort` → ordenação
-   ES Modules (`import / export`)
-   Programação orientada a objetos
-   Arquitetura em camadas
-   Uso de `data-*` attributes
-   Imutabilidade de estado

------------------------------------------------------------------------

## 📂 Estrutura do projeto

    app/
    ├─ controllers/
    │  └─ booksController.js      # Orquestra ações da página
    │
    ├─ model/
    │  └─ BookModel.js            # Modelo de domínio do livro
    │
    ├─ services/
    │  ├─ applyDiscount.js        # Aplica desconto usando map
    │  └─ calcTotalAvailable.js   # Calcula total com reduce
    │
    ├─ state/
    │  └─ booksState.js           # Estado global (allBooks, visibleBooks)
    │
    ├─ ui/
    │  ├─ renderBooks.js          # Renderização da lista de livros
    │  └─ renderTotal.js          # Renderização do valor total
    │
    ├─ main.js                    # Bootstrap da aplicação
    │
    index.html
    style.css

------------------------------------------------------------------------

## 🏗️ Arquitetura (visão geral)

### Fluxo principal

1.  `main.js` inicializa a aplicação
2.  `booksController`:
    -   busca os dados da API
    -   cria instâncias de `BookModel`
    -   popula o estado (`booksState`)
    -   renderiza livros e total
3.  Eventos de clique são controlados por `data-action`
4.  Cada ação atualiza `visibleBooks`
5.  A UI é re-renderizada com base no estado atual

------------------------------------------------------------------------

## 🧩 Modelo de domínio

### BookModel

Responsável por encapsular regras do negócio:

-   Verificar disponibilidade
-   Formatar preço
-   Criar novas instâncias com desconto

Isso mantém a **lógica fora da UI**.

------------------------------------------------------------------------

## 🧮 Funcionalidades

-   Listagem de livros
-   Aplicação de desconto
-   Filtro por categoria
-   Filtro por disponibilidade
-   Ordenação por preço
-   Cálculo do valor total dos livros disponíveis

------------------------------------------------------------------------

## 🚀 Como executar

> ⚠️ O projeto usa **ES Modules**, então não funciona abrindo o HTML
> direto via `file://`.

### Opção recomendada: Live Server

1.  Abra o projeto no VS Code
2.  Instale a extensão **Live Server**
3.  Clique com o botão direito em `index.html`
4.  Selecione **Open with Live Server**

------------------------------------------------------------------------

## 🔮 Próximos passos

-   Toggle de desconto
-   Ordenação crescente/decrescente
-   Busca por título
-   Paginação
-   Migração para TypeScript
-   Testes unitários

------------------------------------------------------------------------

Projeto desenvolvido para fins educacionais 🚀
