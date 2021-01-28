import { ADMIN_LOGIN, USER_LOGIN, LOGOUT } from "../actions/UserActions";
import { User, Admin, UserState } from "../../types";

const initialState: UserState = { user: {firstName: "Daniel", lastName: "Mont-Eton", email: "daniel.monteton@gmail.com", role: "admin"} }

export const userReducer = (
    state: UserState = initialState,
    action: { type: string; payload: Admin | User }
): UserState => {
    switch (action.type) {
        case ADMIN_LOGIN:
            return { ...state, user: action.payload as Admin }
        case USER_LOGIN:
            return { ...state, user: action.payload as User }
        case LOGOUT:
            return { ...state, user: null as null }
        default:
            return state;
    }
}