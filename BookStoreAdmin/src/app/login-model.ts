export interface LoginModel {
    userName: string;
    password: string;
}


export interface LoginResponseModel {
    userName?: string;
    fullName?: string;
    isValidUser: boolean;
    errorMessage: string;
}