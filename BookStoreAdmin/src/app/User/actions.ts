﻿import { Action } from '@ngrx/store';
import { UserRequest , UserResponse} from './user.model';

export const UsersActionTypes = {

    LOAD_USERS: 'LOAD_USERS',
    LOAD_USERS_SUCCESS: 'LOAD_USERS_SUCCESS',

    ADD_USER: 'ADD_USER',
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    SEARCH_USER: 'SEARCH_USER',
    SEARCH_USER_SUCCESS:'SEARCH_USER_SUCCESS'
}

export class UserActions {
    
    static loadUsers():Action {
        console.log('loadUsers()');
        return {
            type: UsersActionTypes.LOAD_USERS,
            payload: {}
        }
    }

    static loadUsersSuccess(users: UserResponse[]): Action {
        console.log('USERS', JSON.stringify(users));
        return {
            type: UsersActionTypes.LOAD_USERS_SUCCESS,
            payload:users
        }
    } 

    static addUser(user: UserRequest): Action {

        return {
            type: UsersActionTypes.ADD_USER,
            payload: user
        }
    }  

    static addUserSuccess(data: any) {
        return {
            type: UsersActionTypes.ADD_USER_SUCCESS,
            payload: data.data
        }
    }

}