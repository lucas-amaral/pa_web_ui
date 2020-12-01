import { combineReducers } from 'redux';

import announcement from './announcement';
import login from './login';
import interest from './interest';
import user from './user';
import neighborhood from './neighborhood';
import street from './street';
import barter from './barter';
import property from './property';
import garage from './garage';

export default combineReducers({
    announcement,
    interest,
    user,
    login,
    neighborhood,
    street,
    barter,
    property,
    garage,
});
