import { LOGIN, LOGOUT, REGISTER } from "./login.Types"


export const Login = (token: string) => ({
    type: LOGIN,
    payload: token,
});

export const Register = () => ({
    type: REGISTER,
});

export const Logout = () => ({
    type: LOGOUT,
})
