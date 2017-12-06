import React from 'react'
import renderer from 'react-test-renderer'
import { Day } from '../Day'
import {fakeGigsByDay} from '../__mocks__/fake-gigs-by-day'

xit('renders Days', () => {
  const component = renderer.create(
    <Day day={fakeGigsByDay[0]} onClick={jest.fn}/>
  );
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

