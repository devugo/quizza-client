import axios from 'axios';

import * as CONSTANTS from '../../constants/index';
import * as LocalStore from '../../helpers/functions/localStore';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const KEEP_USER_LOGGED_IN = 'KEEP_USER_LOGGED_IN';

export const verifyGoogleAuth = async (token, id) => {
    return async (dispatch, getState) => {
        try{
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.HOST}/api/verify-google-auth`,
                headers: {
                    'content-type': 'application/json',
                },
                data: {
                    google_id: id,
                    google_token: token
                }
            });
            let resData = await response.data;
            console.log(response);

            dispatch({
                type: LOGIN_USER,
                data: resData
            });
        }catch(err){
            throw err;
        }
    }
}

export const login = (formData) => {
    return async (dispatch, getState) => {
        try{
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.HOST}/api/login`,
                headers: {
                    'content-type': 'application/json',
                },
                data: formData
            });
            console.log(response);
            let resData = await response.data;
          
            
            dispatch({
                type: LOGIN_USER,
                data: resData
            });
        }catch(err){
            throw err;
        }
    }
}

export const keepUserLoggedIn = () => {
    let getUserFromocalStore = LocalStore.get('QUIZZAUSER');
    if(getUserFromocalStore){
        getUserFromocalStore = JSON.parse(getUserFromocalStore);
        return async (dispatch, getState) => {
            try{
                // const response = await axios({
                //     method: 'POST',
                //     url: `${ENV.HOST}/token-api/validity`,
                //     headers: {
                //         'content-type': 'application/json',
                //     },
                //     data: {
                //         user: JSON.parse(getUserFromocalStore.user).id,
                //         token: getUserFromocalStore.token
                //     }
                // });
                
                // let resData = await response.data;
                
                // let tokenValidity = resData.validity;
                // if(tokenValidity == 1){
                //      dispatch({
                //         type: LOGIN_USER,
                //         data: getUserFromocalStore
                //     });
                // }else{

                // }

                dispatch({
                    type: KEEP_USER_LOGGED_IN,
                    data: getUserFromocalStore
                });
            }catch(err){
                throw err;
            }
           
        }
    }
}

export const logout =() => {
    return async (dispatch, getState) => {

        dispatch({
            type: LOGOUT_USER,
            data: null
        });
    }
}