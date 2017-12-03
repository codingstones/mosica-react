import React from 'react'
import { fakeGigsByDay,FIRST_DAY_GIG_TEXTS } from '../__mocks__/fake-gigs-by-day'
import DaysPage from '../__page_objects__/DaysPage'
import { DaysWithoutRouter as Days } from '../Days'
import { Wrap } from '../../../test/helpers'
//We don't need jest.mock(..MosicaCore) cause it's a default manual mock

describe('Days', async () => {

  let page
  beforeEach(async () => {
    const wrapper = Wrap(<Days/>).mount()
    page = new DaysPage(wrapper)
    await page.wait()
  })

  it('renders the texts of the first day of gigs', async () => {
    FIRST_DAY_GIG_TEXTS.map((text) =>
      page.containsText(text)
    )
  })

  it('full snapshot', () => {
    page.matchSnapshot()
  })

  describe('When clicking gig', ()=> {
    let routerSpy
    beforeEach(async () => {
      routerSpy = { navigateToGig: jest.fn() }
      page.setRouter(routerSpy)
    })

    it('navigates to first gig detail', async () => {
      const FIRST_GIG_ID = '123456'
      page.clickFirstGig()
      expect(routerSpy.navigateToGig).toHaveBeenCalledWith(FIRST_GIG_ID)
    })

    it('navigates to second gig detail', async () => {
      const SECOND_GIG_ID = '2222222'
      page.clickSecondGig()
      expect(routerSpy.navigateToGig).toHaveBeenCalledWith(SECOND_GIG_ID)
    })
  })

  it('shows gigs for each day', async () => {
    //IS THIS TEST WORTHY? Maybe easier to unit-test components
    let expectedGigs
    fakeGigsByDay.map((day, index)=> {
      expectedGigs = day.gigs.map((gig) => gig.title + '-' + gig.place)
      expect(page.gigRowsFor(index)).toEqual(expectedGigs)
    })
  })

})

