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
    BARTER: {
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
    SALE: {
        GET: '/sales',
        ADD: '/sales',
        EDIT: '/sales',
        DELETE: '/sales/:id',
    },
    NEGOTIATION: {
        GET_SALE: '/negotiations/sales/:saleId',
        GET_INTEREST: '/negotiations/interest/:interestId',
        APPROVED_BY_SELLER: '/negotiations/:id/approved-by-seller',
        APPROVED_BY_BUYER: '/negotiations/:id/approved-by-buyer',
        REPROVED_BY_SELLER: '/negotiations/:id/reproved-by-seller',
        REPROVED_BY_BUYER: '/negotiations/:id/reproved-by-buyer',
        DELETE: '/negotiations/:id',
    },
    NEIGHBORHOOD: {
        GET_BY_CITY: '/neighborhoods',
        GET: '/neighborhoods/:id',
    },
    STREET: {
        GET: '/streets/:zipCode',
    },
};
