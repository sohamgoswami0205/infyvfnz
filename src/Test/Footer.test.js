import React from 'react';
import Footer from '../Components/Footer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<Footer />', () => {
    it('Renders 1 <Footer /> Component', () => {
        const component = shallow(<Footer />);
        expect(component).toHaveLength(1);
    });
});