import { combineReducers } from 'redux';

import login from './login';
import interest from './interest';
import user from './user';
import neighborhood from './neighborhood';
import street from './street';
import barter from './barter';
import property from './property';
import garage from './garage';
import sale from './sale';
import negotiation from './negotiation';

export default combineReducers({
    interest,
    user,
    login,
    neighborhood,
    street,
    barter,
    property,
    garage,
    sale,
    negotiation,
});
