import { Action } from '@ngrx/store';

import { LoginModel } from './login-model';

export const UserActionTypes = {

    VALIDATE_USER: 'VALIDATE_USER',
    VALIDATE_USER_SUCCESS: 'VALIDATE_USER_SUCCESS'    

}

export function validateUser(login: LoginModel): Action {

    return {
        type: UserActionTypes.VALIDATE_USER,
        payload:login
    }

}

export function validateUserSuccess(login: LoginModel): Action {

    return {
        type: UserActionTypes.VALIDATE_USER_SUCCESS,
        payload: login
    }

} 