export const actionLogIn = (data) => {
    return (dispatch, getState) => {
        //TODO: make api call
        dispatch({type: "AUTH_USER"})
    }
}