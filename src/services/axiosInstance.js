import axios from 'axios';
import URLS from '../constants/Urls'

export default (history = null) => {
    let headers = {};

    if (localStorage.token) {
        headers.common['x-auth-token'] = `${localStorage.token}`;
    }

    const axiosInstance = axios.create({
        baseURL: 'https://crm-service.herokuapp.com'
    });

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
