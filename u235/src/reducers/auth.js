//This reducer will update the 'isLoggedIn' and 'user' state of the app

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    UPDATE_LOGIN_ATTEMPTS,
} from "../actions/types"

const user =JSON.parse(localStorage.getItem("user"));

const initialState = {
    user : user ? {isLoggedIn: true, user} : {isLoggedIn:false, user: null},
    loginAttempts: 0,
    delayLogin: false,
};

export default function (state = initialState, action) {
    const{type, payload} = action;

    switch(type){
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn:false,
            };
        
        case REGISTER_FAIL:
            return{
                ...state,
                isLoggedIn:false,
            };
        
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
            
        case LOGIN_FAIL:
            if(state.loginAttempts >= 3){
                return{
                    ...state,
                    isLoggedIn: false,
                    user: null,
                    delayLogin:  true,
                    loginAttempts: 0
                };
            } else {return {
                    ...state,
                    isLoggedIn: false,
                    user: null,
                    delayLogin: false,
                    loginAttempts: state.loginAttempts + 1
            }}
            
            
        case LOGOUT: 
            return{
                ...state,
                isLoggedIn: false,
                user: null,
            };
        
        
        default:
            return state;    
    }
}