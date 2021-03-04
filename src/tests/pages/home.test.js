import React from 'react'
import { shallow } from 'enzyme';

import Home from '../../pages/home/home';
import Navbar from '../../components/navbar';

describe('<Home />', () => {
    
    it('should render <Navbar /> component inside <Home /> component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Navbar));
    });
});
