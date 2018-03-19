import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MessageList from '../../models/MessageList';

it('Should render App', () => {
    shallow(<App>Hello World!</App>);
});
