import { types } from '../constants/PropertyTypes';

export const getPropertyTypes = (apiTypes) => {
    return types.filter((type) => apiTypes.includes(type.id));
};
