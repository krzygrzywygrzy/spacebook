const initState = {
    name: "",
    surname: "",
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "AUTH_USER":
            state = action.user;
            break;

        default:
            break;
    }
    return state;
}

export default authReducer;