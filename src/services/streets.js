import URLS from '../constants/Urls';
import axiosInstance from './axiosInstance';

export const load = (zipCode) => {
  return axiosInstance().get(URLS.STREET.GET.replace(':zipCode', zipCode));
};
