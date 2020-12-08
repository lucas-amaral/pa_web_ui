import { strToDate } from './dateTimeUtils';
import { convertMonetaryToNumber, totalValueError } from './numbersUtils';

export const required = () => {
    return {
        required: { value: true, message: 'Campo obrigatório' },
    };
};

export const number = () => {
    return {
        validate: (value) =>
            typeof Number(value) === 'number' && isFinite(Number(value)),
        setValueAs: (value) => (value ? parseFloat(value) : null),
    };
};

export const email = () => {
    return {
        required: {
            value: true,
            message: 'Campo obrigatório',
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Formato inválido',
        },
    };
};

export const minAndMaxSize = (min, max) => {
    return {
        minLength: {
            value: min,
            message: 'Informe quantidade',
        },
        maxLength: {
            value: max,
            message: 'Valor máximo permitido: 9',
        },
    };
};

export const confirmPassword = (password) => {
    return {
        validate: (confirmPassword) => confirmPassword === password,
    };
};

export const totalValue = (totalValue = 0, value1 = 0, value2 = 0) => {
    return {
        setValueAs: (value) => (value ? convertMonetaryToNumber(value) : null),
        validate: (value) =>
            !totalValueError(totalValue, value, value1, value2),
    };
};

export const requiredAddress = (streetId) => {
    return {
        validate: (value) =>
            value === undefined || value.length === 0 || streetId.length > 0,
    };
};

export const setValueAs = (formatFunction) => {
    return {
        setValueAs: (value) => formatFunction(value),
    };
};

export const setValueInt = () => {
    return {
        setValueAs: (value) => (value ? parseInt(value) : null),
    };
};

export const setValueDate = () => {
    return {
        setValueAs: (value) => strToDate(value),
    };
};

export const setValueMonetary = () => {
    return {
        required: true,
        setValueAs: (value) => convertMonetaryToNumber(value),
    };
};
