import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe('snapshot tests', () => {
    it('does a simple snapshot test on <App />', () => {
        const component = renderer.create(<App />).toJSON();
        expect(component).toMatchSnapshot();
    });
});

xdescribe('Enzyme tests', () => {
    // These first two are testing that it exists in the structure we expect
    it('renders header text', () => {
        const app = shallow(<App />);
        expect(app.find('.App-header').text()).toEqual('Convert kg to stone');
    });

    it('has exactly three input fields', () => {
        const app = shallow(<App />);
        expect(app.find('input[type="number"]').length).toEqual(3);
    });
});

xdescribe('Behaviour tests', () => {
    let app;

    beforeEach(() => {
        app = mount(<App />);
    });

    it('renders text and state is OK', () => {
        expect(app.find('.App-header').first()).toBeDefined();
        expect(app.state('kg')).toEqual(0);
        expect(app.state('stone')).toEqual(0);
        expect(app.state('lbs')).toEqual(0);
    });

    it('calls handleLbsChange when value changes', () => {
        const lbsInput = app.find('.z-lbs-input').first();
        lbsInput.simulate('change', { target: { value: 2 } });
        expect(app.state('kg')).toEqual(0.89);
        expect(app.state('stone')).toEqual(0);
        expect(app.state('lbs')).toEqual(2);
    });
});
