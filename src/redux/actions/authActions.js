import { loginService, signupService } from "../../services/authService";

const authenticateUser = (data, redirect) => {
    if (data.errors) {
        //TODO: display info to user
    } else {
        dispatch({ type: "AUTH_USER", user: data });
        redirect();
    }
}

export const actionLogIn = (data, redirect) => {
    return async (dispatch, getState) => {
        let res = await loginService(data);
        authenticateUser(res, redirect);
    }
}

export const actionSignUp = (data, redirect) => {
    return async (dispatch, getState) => {
        let res = await signupService(data);
        authenticateUser(res, redirect);
    }
}

export const actionLogOut = () => {
    return (dispatch, getState) => {
        dispatch({type: "LOG_OUT"});
    }
}