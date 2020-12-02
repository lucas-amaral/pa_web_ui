export const sumValues = ({
    cashValue = '0',
    creditCardValue = '0',
    exchangeValue = '0',
}) => {
    cashValue.replace(',', '.');
    creditCardValue.replace(',', '.');
    exchangeValue.replace(',', '.');

    const x = parseFloat(cashValue);
    const y = parseFloat(creditCardValue);
    const z = parseFloat(exchangeValue);

    return x + y + z;
};

export const convertMonetaryToNumber = (value) => {
    return parseFloat(
        value.replace('R$', '').replace('.', '').replace(',', '.')
    );
};

export const formatToMonetary = (value) => {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

export const generateId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 9);
};
