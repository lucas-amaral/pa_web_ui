import { combineReducers } from 'redux';

import announcement from './announcement';
import login from './login';
import interest from './interest';

export default combineReducers({
    announcement,
    interest,
    login,
});
