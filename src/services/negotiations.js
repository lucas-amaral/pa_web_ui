import URLS from '../constants/Urls';
import axiosInstance from './axiosInstance';

export const loadBySale = (saleId) => {
    return axiosInstance().get(
        URLS.NEGOTIATION.GET_SALE.replace(':saleId', saleId)
    );
};

export const loadByInterest = (interestId) => {
    return axiosInstance().get(
        URLS.NEGOTIATION.GET_INTEREST.replace(':interestId', interestId)
    );
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
    return axiosInstance().put(
        URLS.NEGOTIATION.REPROVED_BY_SELLER.replace(':id', id)
    );
};

export const deleteReprovedByBuyer = async (id) => {
    return axiosInstance().put(
        URLS.NEGOTIATION.REPROVED_BY_BUYER.replace(':id', id)
    );
};

export const remove = (id) => {
    return axiosInstance().delete(URLS.NEGOTIATION.DELETE.replace(':id', id));
};
