import { Action } from '@ngrx/store';

import { LoginModel } from './login-model';
import { UserActionTypes } from './actions';

export interface State {
    isValidUser: boolean;
    userName: string;
    errors: string[];
}

const initialState: State = {
    isValidUser: false,
    userName: null,
    errors: []
}


export function reducer(state: State = initialState, action: Action):State {

    switch (action.type) {
       
        case UserActionTypes.VALIDATE_USER_SUCCESS:            
            return Object.assign({}, action.payload);
        case UserActionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, state, { isValidUser: false, userName: null });
        case UserActionTypes.CAN_ACTIVATE_SUCCESS:           
            return Object.assign({}, action.payload);
        default:
            return state;    
    }

}