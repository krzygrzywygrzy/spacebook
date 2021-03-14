import Cookies from 'js-cookie';

const initState = {
    id:  "",
    email: "",
    fname:  "",
    surname: "",
    token: "",
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "AUTH_USER":
            //seting cookie here is temporary!
            Cookies.set("authenticatedUser", action.user.token);
            state = action.user;
            break;
        case "LOG_OUT":
            Cookies.set("authenticatedUser", "")
            state = initState;
            break;
        default:
            break;
    }
    return state;
}

export default authReducer;