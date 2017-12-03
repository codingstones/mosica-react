import toJson from 'enzyme-to-json'
import { wait } from '../../../test/helpers'

export default class Page {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  async wait() {
    await wait()
    return this.wrapper.update()
  }

  text() {
    return this.wrapper.text()
  }

  html() {
    return this.wrapper.html()
  }

  containsText(text) {
    expect(this.text()).toContain(text)
  }

  setRouter(router) {
    this.wrapper.instance().router = router
  }

  matchSnapshot() {
    expect(toJson(this.wrapper)).toMatchSnapshot()
  }
}