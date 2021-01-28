import { User, Admin } from "../../types";

export const ADMIN_LOGIN = "ADMIN_LOGIN";
export const USER_LOGIN = "USER_LOGIN";
export const LOGOUT = "LOGOUT";

export const adminLogin = (userData: Admin) => ({
    type: ADMIN_LOGIN,
    payload: userData
});

export const userLogin = (userData: User) => ({
    type: USER_LOGIN,
    payload: userData
});

export const logout = () => ({
    type: LOGOUT
});
