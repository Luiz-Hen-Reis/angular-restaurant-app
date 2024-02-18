export interface User {
    id: string;
    name: string;
    email: string;
}

export interface UserResponse extends User {
    token: string
}