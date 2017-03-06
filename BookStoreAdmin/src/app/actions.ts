import { Action } from '@ngrx/store';

import { LoginModel , LoginResponseModel } from './login-model';

export const UserActionTypes = {

    VALIDATE_USER: 'VALIDATE_USER',
    VALIDATE_USER_SUCCESS: 'VALIDATE_USER_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS:'LOGOUT_SUCCESS'    

}

export function validateUser(login: LoginModel): Action {
    $.blockUI();
    return {
        type: UserActionTypes.VALIDATE_USER,
        payload:login
    }

}

export function validateUserSuccess(loginResponse: LoginResponseModel): Action {
    $.unblockUI();
    return {
        type: UserActionTypes.VALIDATE_USER_SUCCESS,
        payload: loginResponse
    }

} 


export function logOut(): Action {

    return {
        type: UserActionTypes.LOGOUT,
        payload:{}
    }
}

export function logOutSuccess(): Action {

    return {
        type: UserActionTypes.LOGOUT_SUCCESS,
        payload: {}
    }
}