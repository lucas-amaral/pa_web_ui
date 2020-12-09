import URLS from '../constants/Urls';
import axiosInstance from './axiosInstance';

export const load = (username) => {
  return axiosInstance().get(URLS.INTEREST.GET_BY_USERNAME, {
    params: { username },
  });
};

export const create = async (data) => {
  return axiosInstance().post(URLS.INTEREST.ADD, data);
};

export const update = async (data) => {
  return axiosInstance().put(URLS.INTEREST.EDIT, data);
};

export const remove = (interest) => {
  return axiosInstance().delete(URLS.INTEREST.DELETE.replace(':id', interest));
};
