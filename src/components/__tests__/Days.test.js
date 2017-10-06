import { mount } from 'enzyme';
import React from 'react';
import { MyRouter } from '../../services/MyRouter';
import { fakeGigsByDay } from '../__mocks__/fake-gigs-by-day';
import DaysPage from '../__page_objects__/GigContainerPage';
import { DaysWithoutRouter as Days } from '../Days';

jest.mock('../../services/MyRouter');
let navigateToGigMock;
beforeEach(() => {
  navigateToGigMock = MyRouter().navigateToGig
  navigateToGigMock.mockClear()
});


describe('Days', async () => {

  let page, wrapper;
  beforeEach(async () => {
    wrapper = mount(
      <Days />
    );
    page = new DaysPage(wrapper);
    await page.updateAsync();

  });

  it('full snapshot', () => {
    page.matchSnapshot()
  });

  it('renders a concrete gig title', async () => {
    const GIG_TITLE = fakeGigsByDay[0].gigs[1].title;
    page.containsText(GIG_TITLE);
  });

  it('renders the first day of gigs', async () => {
    const FIRST_DAY_GIG_TEXTS = fakeGigsByDay[0].gigs.map(
      gig => gig.title + '-' + gig.place)

    FIRST_DAY_GIG_TEXTS.map((text) =>
      page.containsText(text)
    )
  });

  it('navigates to first gig detail', async () => {
    const FIRST_GIG_ID = '123456'
    page.clickFirstGig();
    expect(navigateToGigMock).toHaveBeenCalledWith(FIRST_GIG_ID);
  });

  it('navigates to second gig detail', async () => {
    const SECOND_GIG_ID = '2222222'
    page.clickSecondGig();
    expect(navigateToGigMock).toHaveBeenCalledWith(SECOND_GIG_ID);
  });

  it('shows gigs for each day', async () => {
    //IS THIS TEST WORTHY? Maybe easier to unit-test components
    let expectedGigs;
    fakeGigsByDay.map((day, index)=> {
      expectedGigs = day.gigs.map((gig) => gig.title + '-' + gig.place)
      expect(page.gigRowsFor(index)).toEqual(expectedGigs);
    });
  });

});

