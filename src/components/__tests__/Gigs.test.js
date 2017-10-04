import React from 'react';
import renderer from 'react-test-renderer';
import {fakeGigsByDay} from '../__mocks__/fake-gigs-by-day';
import { Gigs } from '../Gigs';

it('renders GigsDay', () => {
  const component = renderer.create(
    <Gigs gigs={fakeGigsByDay[0].gigs} onClick={jest.fn}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

