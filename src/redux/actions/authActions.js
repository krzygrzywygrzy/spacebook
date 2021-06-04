import { loginService, signupService } from "../../services/authService";

const authenticateUser = (data, redirect, dispatch) => {
    if (data.errors) {
        //TODO: display info to user
        console.error("ERROR!");
        console.log(data.errors);
    } else {
        console.table(data);
        dispatch({ type: "AUTH_USER", user: data });
        redirect();
    }
}

export const actionLogIn = (data, redirect) => {
    return async (dispatch) => {
        let res = await loginService(data);
        authenticateUser(res, redirect, dispatch);
    }
}

export const actionSignUp = (data, redirect) => {
    return async (dispatch) => {
        let res = await signupService(data);
        authenticateUser(res, redirect, dispatch);
    }
}

export const actionLogOut = () => {
    return (dispatch) => {
        dispatch({ type: "LOG_OUT" });
    }
}