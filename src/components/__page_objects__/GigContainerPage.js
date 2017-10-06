import toJson from 'enzyme-to-json'

export default class GigContainerPage {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  async updateAsync() {
    await flushPromises()
    this.wrapper.update()
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

  clickFirstGig() {
    return this.wrapper.find('.row').first().simulate('click')
  }

  clickSecondGig() {
    return this.wrapper.find('.row').at(1).simulate('click')
  }
}