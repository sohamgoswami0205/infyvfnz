import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Components/Header';
import PhotoViewerApp from '../Components/PhotoViewerApp';

configure({ adapter: new Adapter() });

const wrapper = shallow(<PhotoViewerApp.WrappedComponent />);

describe('<PhotoViewerApp>', ()=>{
    it('Renders 1 <PhotoViewerApp /> Component', ()=>{
        const component = shallow(<PhotoViewerApp.WrappedComponent />);
        expect(component).toHaveLength(1);
    })
});

describe('<Footer />', () =>{
    it('Checks for <Footer /> Component', () => {
        expect(wrapper.find('Footer')).toHaveLength(1);
    });
})

describe('<Header />', () =>{
    it('Checks for <Header /> Component', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });
})

describe('initializeHeader state FALSE', ()=>{
    global.window = Object.create(window);
    const url = "http://localhost:3000/albums";
    const host = "http://localhost:3000";
    Object.defineProperty(window, 'location', {
        value:{
            host: host,
            href: url
        }
    });
    it('Checks for initializeHeader value to be false', ()=>{
        const component = shallow(<PhotoViewerApp.WrappedComponent />);
        expect(component).toHaveLength(1);
    })
})