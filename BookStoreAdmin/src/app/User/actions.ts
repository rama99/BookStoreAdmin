import { Action } from '@ngrx/store';
import { UserRequest , UserResponse} from './user.model';

export const UserActionTypes = {

    LOAD_USERS: 'LOAD_USERS',
    LOAD_USERS_SUCCESS: 'LOAD_USERS_SUCCESS',

    ADD_USER: 'ADD_USER',
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    SEARCH_USER: 'SEARCH_USER',
    SEARCH_USER_SUCCESS:'SEARCH_USER_SUCCESS'
}

export class UserActions {
    
    static loadUsers():Action {

        return {
            type: UserActionTypes.LOAD_USERS,
            payload: {}
        }
    }

    static loadUsersSuccess(users: UserResponse[]): Action {

        return {
            type: UserActionTypes.LOAD_USERS_SUCCESS,
            payload:users
        }
    }   

}