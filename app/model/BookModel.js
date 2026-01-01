export class BookModel
{
    constructor(data)
    {
        this.title = String(data.title);
        this.price = Number(data.price);
        this.author = String(data.author);
        this.image = String(data.image);
        this.alt = String(data.alt);
        this.quantity = Number(data.quantity);
        this.category = data.category;

        // Exemplo de regra: não permitir negativo
        if (Number.isNaN(this.quantity) || this.quantity < 0) this.quantity = 0;
        if (Number.isNaN(this.price)) this.price = 0;
    }

    isAvailable()
    {
        return this.quantity > 0;
    }

    formattedPrice()
    {
        return this.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    applyDiscount(discount)
    {
        return this.price - (this.price * discount);
    }

    withDiscount(discount)
    {
        return new BookModel({
            title: this.title,
            price: this.applyDiscount(discount),
            author: this.author,
            image: this.image,
            alt: this.alt,
            quantity: this.quantity,
            category: this.category,
        });
    }
}
