import { actionLogIn, } from '../../../redux/actions/authActions';
import { loginService } from '../../../services/authService';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';


const mockStore = configureMockStore([thunk]);

describe('async authActions', () => {
    it("should return AUTH_USER action when after calling actionLogIn", () => {
        loginService = jest.fn();
        
    });
});