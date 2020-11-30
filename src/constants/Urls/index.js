export default {
    AUTH: {
        LOGIN: '/login',
        LOGOUT: '/logout',
    },
    USER: {
        LIST: '/users',
        GET: '/users/:username',
        ADD: '/users',
        EDIT: '/users',
        DELETE: '/users/:id',
    },
    INTEREST: {
        GET_BY_USERNAME: '/interests',
        GET: '/interests/:id',
        ADD: '/interests',
        EDIT: '/interests',
        DELETE: '/interests/:id',
    },
    BARTERS: {
        GET: '/barters/:id',
        ADD: '/barters/',
        EDIT: '/barters/',
        DELETE: '/barters/:id',
        GET_IMAGES: '/interests/barters/:id/images',
        ADD_IMAGE: '/interests/barters/images',
        DELETE_IMAGE: '/interests/barters/images/:id',
    },
    PROPERTY: {
        GET: '/properties',
        ADD: '/properties',
        EDIT: '/properties',
        DELETE: '/properties/:id',
    },
    NEIGHBORHOOD: {
        GET_BY_CITY: '/neighborhoods',
        GET: '/neighborhoods/:id',
    },
    STREET: {
        GET: '/streets/:zipCode',
    },
};
