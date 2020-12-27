import { LOGIN_USER, LOGOUT_USER } from '../actions/auth';

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