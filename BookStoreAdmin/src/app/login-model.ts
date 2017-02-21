export interface LoginModel {
    userName: string;
    password: string;
}


export interface LoginResponseModel {
    isValidUser: boolean;
    errorMessage: string;
}