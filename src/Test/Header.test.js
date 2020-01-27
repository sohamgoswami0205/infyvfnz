import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Components/Header';
import Button from '../Components/Common/Button';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
    it('Renders 1 <Header /> Component', () => {
        const component = shallow(<Header.WrappedComponent />);
        expect(component).toHaveLength(1);
    });
});

describe('headerDisabled state TRUE', ()=>{
    global.window = Object.create(window);
    const url = "http://localhost:3000/albums";
    const host = "http://localhost:3000";
    Object.defineProperty(window, 'location', {
        value:{
            host: host,
            href: url
        }
    });
    it('Checks for headerDisabled value to be true', ()=>{
        const component = mount(<Header.WrappedComponent />);
        expect(component.state().headerDisabled).toBeTruthy();
    })
})

describe('<Button />', ()=>{
    it('Renders 1 <Button /> component', ()=>{
        const component = mount(<Button btnType="btn btn-default" onClick={()=>jest.fn()}>TEST BUTTON</Button>);
        expect(component).toHaveLength(1);
    })
})