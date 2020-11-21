export default {
    AUTH: {
        LOGIN: "/login",
        LOGOUT: "/logout",
    },
    USER:{
        LIST: "/users",
        GET: "/users/:username",
        ADD: "/users",
        EDIT: "/users",
        DELETE: "/users/:id",
    },
    INTEREST: {
        GET_BY_USERNAME: "/interests",
        GET: "/interests/:id",
        ADD: "/interests",
        EDIT: "/interests",
        DELETE: "/interests/:id",
    },
    BARTERS: {
        GET_IMAGES: "/interests/barters/:id/images",
        ADD_IMAGE: "/interests/barters/images",
        DELETE: "/interests/barters/images/:id",
    },
    NEIGHBORHOOD: {
        GET_BY_CITY: "/neighborhoods",
        GET: "/neighborhoods/:id",
    },
    STREET: {
        GET: "/streets/:zipCode",
    },
}
