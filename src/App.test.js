import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
// jest.unmock('mosica-core')

it('renders App', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders App with async', async () => {
  const component = mount(
    <App />
  );
  await flushPromises();
  console.log('.day', component.find('.day'));
  console.log('COMPLETO', component.html());
});

