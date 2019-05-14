import React from 'React';
import { shallow } from 'enzyme';
import App from './App';



describe('@App', () => {
  const app = shallow(<App/>)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  });

  it('contains a Connected Wallet component', () => {
    expect(app.find('ConnectFunction').exists()).toBe(true)
  })
});