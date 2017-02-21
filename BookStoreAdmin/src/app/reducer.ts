import { Action } from '@ngrx/store';

import { LoginModel } from './login-model';
import { UserActionTypes } from './actions';

export interface State {
    isValidUser: boolean;
    userName: string;
}

const initialState: State = {
    isValidUser: false,
    userName:null
}


export function reducer(state: State = initialState, action: Action):State {

    switch (action.type) {

       /* case UserActionTypes.VALIDATE_USER:
            return state; */
        case UserActionTypes.VALIDATE_USER_SUCCESS:
            return Object.assign({}, action.payload);
        case UserActionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, { isValidUser: false, userName: null } );
        default:
            return state;    
    }


}