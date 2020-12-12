import URLS from '../constants/Urls';
import axiosInstance from './axiosInstance';

export const loadBySale = (username) => {
  return axiosInstance().get(URLS.NEGOTIATION.GET_SALE, {
    params: { username },
  });
};

export const loadByInterest = (username) => {
  return axiosInstance().get(URLS.NEGOTIATION.GET_INTEREST, {
    params: { username },
  });
};

export const putApprovedBySeller = async (id) => {
  return axiosInstance().put(
    URLS.NEGOTIATION.APPROVED_BY_SELLER.replace(':id', id)
  );
};

export const putApprovedByBuyer = async (id) => {
  return axiosInstance().put(
    URLS.NEGOTIATION.APPROVED_BY_BUYER.replace(':id', id)
  );
};

export const deleteReprovedBySeller = async (id) => {
  return axiosInstance().delete(
    URLS.NEGOTIATION.REPROVED_BY_SELLER.replace(':id', id)
  );
};

export const deleteReprovedByBuyer = async (id) => {
  return axiosInstance().delete(
    URLS.NEGOTIATION.REPROVED_BY_BUYER.replace(':id', id)
  );
};

export const remove = (id) => {
  return axiosInstance().delete(URLS.NEGOTIATION.DELETE.replace(':id', id));
};
