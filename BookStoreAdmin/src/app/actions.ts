import { Action } from '@ngrx/store';

import { LoginModel , LoginResponseModel } from './login-model';

export const UserActionTypes = {

    VALIDATE_USER: 'VALIDATE_USER',
    VALIDATE_USER_SUCCESS: 'VALIDATE_USER_SUCCESS',

    CAN_ACTIVATE: 'CAN_ACTIVATE',
    CAN_ACTIVATE_SUCCESS:'CAN_ACTIVATE_SUCCESS',

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

export function validateUserSuccess(loginResponse: any): Action {
    $.unblockUI();
    return {
        type: UserActionTypes.VALIDATE_USER_SUCCESS,
        payload: loginResponse.data
    }
} 

export function canActivate(): Action {
    $.blockUI();
    return {
        type: UserActionTypes.CAN_ACTIVATE,
        payload:{}
    }
}

export function canActivateSuccess(canActivateResponse: any): Action {
    $.unblockUI();
    return {
        type: UserActionTypes.CAN_ACTIVATE_SUCCESS,
        payload: canActivateResponse.data
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