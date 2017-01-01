import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from '../src/App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

describe('Enzyme tests', () => {
    // These first two are testing that it exists in the structure we expect
    it('renders header text', () => {
        const app = shallow(<App/>);
        expect(app.find('.App-header').text()).toEqual('Convert kg to stone');
    });

    it('has exactly three input fields', () => {
        const app = shallow(<App/>);
        expect(app.find('input[type="number"]').length).toEqual(3);
    });
});
