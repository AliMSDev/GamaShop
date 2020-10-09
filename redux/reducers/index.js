import {combineReducers} from 'redux';
import basketReducer from './basket';
import usersReducer from './users';
import menuToggleReducer from './menuToggle';
import authenticationReducer from './authentication';
import blogReducer from './blog';

const allReducer = combineReducers ({
    menuToggleReduce : menuToggleReducer,
    basketReduce : basketReducer,
    usersReduce: usersReducer,
    authenticationReduce: authenticationReducer,
    blogReduce: blogReducer
})
export default allReducer;