import { RouteProps} from 'react-router-dom';

// User & User State
export interface BaseUser {
    email: string;
    role: string;
}

export interface User extends BaseUser {
    username: string;
    wins: number;
    losses: number;
    draws: number;
}

export interface Admin extends BaseUser {
    firstName: string;
    lastName: string;
}

export interface UserState {
    user: User | Admin | null;
}

export interface Store {
    auth: UserState;
    loading: boolean;
}

// Firebase types
export interface FirebaseAuthUserObj {
    email: string;
    password: string;
}

export interface FirebaseAuthUpdateUser {
    displayName: string;
    photoURL?: string;
}

// COMPONENT PROPS TYPES
export interface PrivateRoutesProps extends RouteProps {
    auth: UserState;
    loading: boolean;
    redirectPath: string;
}

// COMPONENT STATE TYPES
export interface LoginFormState {
    email: string;
    password: string;
}

export interface SignupFormState extends LoginFormState {
    confirmPassword: string;
}
