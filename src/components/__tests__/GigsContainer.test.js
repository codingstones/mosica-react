import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { GigsContainerWithoutRouter as GigsContainer } from '../GigsContainer';
import AppPO from '../__page_objects__/GigContainerPO';
import {fakeGigsByDay} from '../__mocks__/fake-gigs-by-day';
import { MyRouter } from '../../services/MyRouter';
jest.mock('../../services/MyRouter');
let navigateToGigMock;
beforeEach(() => {
  navigateToGigMock = MyRouter().navigateToGig
  navigateToGigMock.mockClear()
});
// jest.unmock('mosica-core')

it('renders GigsContainer', () => {
  const component = renderer.create(<GigsContainer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('When GigsContainer is rendered with async gigs', async () => {

  let app, wrapper;
  beforeEach(async () => {
    wrapper = mount(
      <GigsContainer />
    );
    app = new AppPO(wrapper);
    await app.updateAsync();

  });

  it('shows a concrete gig title', async () => {
    const GIG_TITLE = fakeGigsByDay[0].gigs[1].title;
    expect(app.text()).toContain(GIG_TITLE);
  });

  it('shows days', async () => {
    const DAYS = fakeGigsByDay.map((day)=> day.day);
    expect(app.dayTexts()).toEqual(DAYS);
  });

  it('shows gigs for each day', async () => {
    //IS THIS TEST WORTHY? Maybe easier to unit-test components
    let expected_gigs;
    fakeGigsByDay.map((day, index)=> {
      expected_gigs = day.gigs.map((gig) => gig.title + '-' + gig.place)
      expect(app.gigRowsFor(index)).toEqual(expected_gigs);
    });
  });

  it('navigates to gig detail when click', async () => {
    app.clickFirstGig();
    expect(navigateToGigMock).toHaveBeenCalledWith('123456');
  });

  it('navigates to gig detail when click', async () => {
    app.clickSecondGig();
    expect(navigateToGigMock).toHaveBeenCalledWith('2222222');
  });
});

