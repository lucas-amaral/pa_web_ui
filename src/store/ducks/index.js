import { combineReducers } from 'redux';

import announcement from './announcement';
import login from './login';
import interest from './interest';
import user from './users';

export default combineReducers({
    announcement,
    interest,
    user,
    login,
});
