import { combineReducers } from 'redux';

import announcement from './announcement';
import message from './message';
import login from './login';
import interest from './interest';

export default combineReducers({
    announcement,
    interest,
    message,
    login,
});
