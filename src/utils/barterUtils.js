import { types } from '../constants/BarterTypes';

export const getBarterType = (apiType) => {
  return types.filter((type) => apiType === type.id).map((type) => type.value);
};
