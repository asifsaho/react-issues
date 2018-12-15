import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './preloader';

it('Preloader component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Preloader show={true}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
