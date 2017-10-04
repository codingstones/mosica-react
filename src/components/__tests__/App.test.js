import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import AppPO from '../__page_objects__/AppPO';
import {fakeGigsByDay} from '../__mocks__/fake-gigs-by-day';
// jest.unmock('mosica-core')

it('renders App', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('When App is rendered with async gigs', async () => {

  let app, wrapper;
  beforeEach(async () => {
    wrapper = mount(
      <App />
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

});

