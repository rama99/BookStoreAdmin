import { Action } from '@ngrx/store';

import { LoginModel } from './login-model';
import { UserActionTypes } from './actions';

export interface State {
    userName: string;
}

const initialState: State = {
    userName:null
}

/*
export function reducer(state: State = initialState, action: Action):State {

    switch (action.type) {

        case UserActionTypes.VALIDATE_USER:
            return 
    }


}*/