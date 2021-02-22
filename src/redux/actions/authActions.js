import { loginService } from "../../services/authService";

export const actionLogIn = (data, react, handleError) => {
    return async (dispatch, getState) => {
        let res = await loginService(data);

        if (res.errors) {
            //TODO: display info to user
        } else {
            dispatch({ type: "AUTH_USER", user: res });
            console.log(res);
            react();
        }

    }
}
