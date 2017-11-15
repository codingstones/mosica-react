import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { GigsContainerWithoutRouter as GigsContainer } from '../GigsContainer';
import GigsContainerPO from '../__page_objects__/GigContainerPO';
import {fakeGigsByDay} from '../__mocks__/fake-gigs-by-day';
import { MyRouter } from '../../services/MyRouter';
jest.mock('../../services/MyRouter');
let navigateToGigSpy;
beforeEach(() => {
  navigateToGigSpy = MyRouter().navigateToGig
  navigateToGigSpy.mockClear()
});
// jest.unmock('mosica-core')

it('renders GigsContainer', () => {
  const component = renderer.create(<GigsContainer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('When GigsContainer is rendered with async gigs', async () => {

  let container, wrapper;
  beforeEach(async () => {
    wrapper = mount(
      <GigsContainer />
    );
    container = new GigsContainerPO(wrapper);
    await container.updateAsync();

  });

  it('shows a concrete gig title', async () => {
    const GIG_TITLE = fakeGigsByDay[0].gigs[1].title;
    expect(container.text()).toContain(GIG_TITLE);
  });

  it('shows days', async () => {
    const DAYS = fakeGigsByDay.map((day)=> day.day);
    expect(container.dayTexts()).toEqual(DAYS);
  });

  it('shows gigs for each day', async () => {
    //IS THIS TEST WORTHY? Maybe easier to unit-test components
    let expectedGigs;
    fakeGigsByDay.map((day, index)=> {
      expectedGigs = day.gigs.map((gig) => gig.title + '-' + gig.place)
      expect(container.gigRowsFor(index)).toEqual(expectedGigs);
    });
  });

  it('navigates to gig detail when click', async () => {
    container.clickFirstGig();
    expect(navigateToGigSpy).toHaveBeenCalledWith('123456');
  });

  it('navigates to gig detail when click', async () => {
    container.clickSecondGig();
    expect(navigateToGigSpy).toHaveBeenCalledWith('2222222');
  });
});
