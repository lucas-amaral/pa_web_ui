export const isAuthenticated = () =>
    localStorage.getItem('token') !== undefined;
