import URLS from "../constants/Urls";
import axiosInstance from "./axiosInstance";

export const load = (id) => {
    return axiosInstance().get(URLS.NEIGHBORHOOD.GET.replace(":id", id));
};

export const loadByUserName = () => {
    return axiosInstance().get(URLS.NEIGHBORHOOD.GET_BY_CITY, {
        params: {
            cityId: 1,
        },
    });
};
