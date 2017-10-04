import React from 'react';
import renderer from 'react-test-renderer';
import { GigsDay } from '../GigsDay';
import {fakeGigsByDay} from '../__mocks__/fake-gigs-by-day';

it('renders GigsDay', () => {
  const component = renderer.create(
    <GigsDay days={fakeGigsByDay} onClick={jest.fn}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

