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
            state = action.user;
            break;
        case "LOG_OUT":
            state = initState;
            break;
        default:
            break;
    }
    return state;
}

export default authReducer;