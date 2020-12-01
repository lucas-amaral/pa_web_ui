import URLS from '../constants/Urls';
import axiosInstance from './axiosInstance';

export const load = (propertyId) => {
    return axiosInstance().get(URLS.SALE.GET, {
        params: { propertyId },
    });
};

export const create = async (data) => {
    return axiosInstance()
        .post(URLS.SALE.ADD, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const update = async (data) => {
    return axiosInstance()
        .put(URLS.SALE.EDIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const remove = (saleId) => {
    return axiosInstance().delete(URLS.SALE.DELETE.replace(':id', saleId));
};
