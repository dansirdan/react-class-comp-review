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

// const testUserStateOne: Store = {
//     auth: {
//         username: "dan",
//         wins: 1,
//         losses: 0,
//         draws: 0,
//         email: "dan@dan.com",
//         role: "game-user"
//     },
//     loading: false
// }

// const testUserStateTwo: Store = {
//     auth: {
//         firstName: "Daniel",
//         lastName: "Mont-Eton",
//         email: "dan@dan.com",
//         role: "admin"
//     },
//     loading: false
// }

// const testUserStateNull: Store = {
//     auth: null,
//     loading: false
// }

export interface PrivateRoutesProps extends RouteProps {
    auth: UserState;
    loading: boolean;
    redirectPath: string;
}