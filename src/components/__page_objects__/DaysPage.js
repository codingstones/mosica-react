import toJson from 'enzyme-to-json'
import { wait } from '../../../test/helpers'
import { GigRow } from '../GigRow'

export default class DaysPage {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  async wait() {
    await wait()
    return this.wrapper.update()
  }

  matchSnapshot() {
    expect(toJson(this.wrapper)).toMatchSnapshot()
  }

  dayTexts() {
    return this.wrapper.find('.day').map((day) => day.text())
  }

  gigRowsFor(dayNumber) {
    return this.wrapper.find('.gigs').at(dayNumber).find('.row').map((row) => row.text())
  }

  containsText(text) {
    expect(this.text()).toContain(text)
  }

  text() {
    return this.wrapper.text()
  }

  html() {
    return this.wrapper.html()
  }

  setRouter(router) {
    this.wrapper.instance().router = router
  }

  async clickFirstGig() {
    return this.wrapper.find(GigRow).first().simulate('click')
  }

  clickSecondGig() {
    return this.wrapper.find(GigRow).at(1).simulate('click')
  }
}