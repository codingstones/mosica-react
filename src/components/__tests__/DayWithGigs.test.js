import React from 'react';
import renderer from 'react-test-renderer';
import { DayWithGigs } from '../DayWithGigs';
import {fakeGigsByDay} from '../__mocks__/fake-gigs-by-day';

it('renders DayWithGigs', () => {
  const component = renderer.create(
    <DayWithGigs days={fakeGigsByDay} onClick={jest.fn}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

