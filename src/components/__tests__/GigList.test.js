import React from 'react';
import renderer from 'react-test-renderer';
import {fakeGigsByDay} from '../__mocks__/fake-gigs-by-day';
import { GigList } from '../GigList';

it('renders GigList', () => {
  const component = renderer.create(
    <GigList gigs={fakeGigsByDay[0].gigs} onClick={jest.fn}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

