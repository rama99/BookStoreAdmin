import { Action } from '@ngrx/store';

import { UsersActionTypes } from './actions';

import { UserRequest, UserResponse } from './user.model';

interface State {
    currentPage: number;
    users: UserResponse[];
    errors: string[];
}

const initialState: State = {
    currentPage: 0,
    users: [],
    errors: [],
}

export function reducer(state: State = initialState, action: Action): State {

    switch (action.type) {

        case UsersActionTypes.LOAD_USERS_SUCCESS:
            console.log('xxx', JSON.stringify(action.payload.data.users));
            return Object.assign({}, state, { users: action.payload.data.users })
        case UsersActionTypes.ADD_USER_SUCCESS:
            return Object.assign({} , state , {users: state.users.concat(action.payload)})
        default:
            return state;
    }

}