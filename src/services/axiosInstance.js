import axios from 'axios';
import URLS from '../constants/Urls'
import { AUTH_TOKEN } from '../constants/Headers';

export default (history = null) => {

    const axiosInstance = axios.create({
        baseURL: 'https://crm-service.herokuapp.com',
    });

    if (localStorage.token !== 'undefined') {
        axiosInstance.defaults.headers.common[AUTH_TOKEN] = `${localStorage.token}`;
    }

    axiosInstance.interceptors.response.use((response) =>

            new Promise((resolve) => {
                resolve(response);
            }), (error) => {
            if (!error.response) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

            if (error.response.status === 403) {
                localStorage.removeItem('token');

                if (history) {
                    history.push(URLS.AUTH.LOGIN);
                } else {
                    window.location = URLS.AUTH.LOGIN;
                }
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        },
    );

    return axiosInstance;
};
