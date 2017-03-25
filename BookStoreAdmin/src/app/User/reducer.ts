import { Action } from '@ngrx/store';

import { UserActionTypes } from './actions';

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
        default:
            return state;
    }

}