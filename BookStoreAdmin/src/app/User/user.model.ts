export interface UserRequest {
    id: number;
    user_name: string;
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
}

export interface UserResponse {
    id: number;
    user_name: string;
    first_name: string;
    last_name: string;
    password: string;
}