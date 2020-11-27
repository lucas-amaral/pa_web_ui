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

export const convertMonetaryToInt = (value) => {
    return parseFloat(
        value.replace('R$', '').replace('.', '').replace(',', '.')
    );
};
