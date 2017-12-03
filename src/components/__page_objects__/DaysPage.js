import { GigRow } from '../GigRow'
import Page from './Page'

export default class DaysPage extends Page {
  dayTexts() {
    return this.wrapper.find('.day').map((day) => day.text())
  }

  gigRowsFor(dayNumber) {
    return this.wrapper.find('.gigs').at(dayNumber).find('.row').map((row) => row.text())
  }

  clickFirstGig() {
    return this.wrapper.find(GigRow).first().simulate('click')
  }

  clickSecondGig() {
    return this.wrapper.find(GigRow).at(1).simulate('click')
  }
}