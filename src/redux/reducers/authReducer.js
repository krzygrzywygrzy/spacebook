const initState = {
    name: "",
    surname: "",
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "AUTH_USER":
            //TODO: set state
            break;
    
        default:
            break;
    }

    return state;
}

export default authReducer;