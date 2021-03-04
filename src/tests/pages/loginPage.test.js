import React from 'react'
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { assert } from 'chai';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginPage from '../../pages/auth/login';
import actionLogIn from '../../redux/actions/authActions';



const mockStore = configureStore([thunk]);


describe('<LoginPage />', () => {
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore({
            auth: {}
        });

        wrapper = mount(<Provider store={store}>
            <LoginPage />
        </Provider>);

        store.dispatch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render div that is submit button which dispatches action after click', () => {

        const button = wrapper.find(".submit-btn");
        expect(button.length).toEqual(1);

        act(() => {
            button.simulate('click');
        });

        assert(() => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(stotre.dispatch).toHaveBeenCalledWith(
                actionLogIn({}, () => { })
            )
        })

    });

    it('shoud render div that after click changes route', () => {
        const button = wrapper.find(".redirect-link");
        expect(button.length).toEqual(1);

        act(() => {
            button.simulate('click');
        });

        //TODO: find way to test wouter 

    })
});



