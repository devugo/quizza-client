import { LOGIN_USER, LOGOUT_USER, KEEP_USER_LOGGED_IN } from '../actions/auth';

import User from '../../models/User';
import * as LocalStore from '../../helpers/functions/localStore';

const initialState = {
    data: [],
    loggedIn: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
            let userInfo = action.data.user;
            let token = action.data.token;

            const userData = new User(
                userInfo.id,
                userInfo.name,
                userInfo.username,
                userInfo.email, 
                userInfo.role_id, 
                token
            );
            LocalStore.add('QUIZZAUSER', JSON.stringify(userData));

            return {
                ...state,
                data: userData,
                loggedIn: true
            }
        case KEEP_USER_LOGGED_IN:
            return {
                data: action.data,
                loggedIn: true
            }
        case LOGOUT_USER:
            //  Delete user data from local storage
            LocalStore.remove('QUIZZAUSER');
            return {
                data: [],
                loggedIn: false
            }
    }
    return state;
}