import { LOGIN_USER, LOGOUT_USER } from '../actions/auth';

import User from '../../models/User';

const initialState = {
    data: [],
    loggedIn: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
            // let userInfo = JSON.parse(action.data.user);
            // let token = action.data.token;
            
            
            const userData = new User(
                // userInfo.id, 
                // userInfo['@id'], 
                // userInfo.username, 
                // userInfo.email, 
                // userInfo.roles[0], 
                // token, 
                // userInfo.agencyInterlinks && userInfo.agencyInterlinks[0] && userInfo.agencyInterlinks[0].agency,
                // userInfo.tblUserUserTypes && userInfo.tblUserUserTypes
            );

            return {
                ...state,
                data: userData,
                loggedIn: true
            }
        case LOGOUT_USER:
            return {
                data: [],
                loggedIn: false
            }
    }
    return state;
}