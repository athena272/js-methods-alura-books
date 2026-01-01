export function renderTotal({ total, container })
{
    container.textContent = formatBRL(total);
}

function formatBRL(value)
{
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}