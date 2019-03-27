import React from 'react';
import {shallow} from 'enzyme';
import App from './App';


const app = shallow(<App/>);

describe('@app', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })
})