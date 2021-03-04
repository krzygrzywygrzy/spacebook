import authReducer from '../../../redux/reducers/authReducer';

describe('authReducer', () => {
    it("should return the inital state", () => {
        expect(authReducer(undefined, {})).toEqual({
            id: "",
            email: "",
            fname: "",
            surname: "",
            token: "",
        });
    });

    it('should handle AUTH_USER', () => {
        expect(authReducer([], {
            type: "AUTH_USER",
            user: {},
        })).toEqual({});
    });

    it("should return the initial state when action is LOG_OUT", () => {
        expect(authReducer([], {type: "LOG_OUT"})).toEqual({
            id: "",
            email: "",
            fname: "",
            surname: "",
            token: "",
        });
    })
});