import { combineReducers } from 'redux';

import announcement from './announcement';
import message from './message';

export default combineReducers({
    announcement,
    message,
});
