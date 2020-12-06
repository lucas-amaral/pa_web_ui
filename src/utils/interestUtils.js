import { types } from '../constants/PropertyTypes';

export const getPropertyTypes = (apiTypes) => {
  if (apiTypes[0].name) {
    const filteredTypes = [];
    for (let i = 0; i < apiTypes.length; i++) {
      if (apiTypes[i].value) {
        filteredTypes.pop(apiTypes[i].name);
      }
    }
    return filteredTypes;
  }
  return types.filter((type) => apiTypes.includes(type.id));
};
