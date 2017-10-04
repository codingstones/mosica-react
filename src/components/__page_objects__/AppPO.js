export default class AppPO {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  async updateAsync() {
    await flushPromises();
    this.wrapper.update();
  }

  dayTexts() {
    return this.wrapper.find('.day').map((day) => day.text());
  }

  gigRowsFor(dayNumber) {
    return this.wrapper.find('.gigs').at(dayNumber).find('.row').map((row) => row.text())
  }

  text() {
    return this.wrapper.text();
  }
}