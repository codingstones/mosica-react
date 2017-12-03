import { shallow as _shallow, mount as _mount } from 'enzyme'

export function resolvedPromise(promiseResult) {
  return jest.fn(() => Promise.resolve(promiseResult))
}

export function rejectedPromise(promiseError) {
  return jest.fn(() => Promise.reject(promiseError))
}

export function Wrap(Component) {

  return {mount, shallow, withProps, withParamId}

  function withProps(props) {
    this.props = props
    return this
  }

  function withParamId(id) {
    Component.methods.paramId = () => id
    return this
  }

  function mount() {
    const wrapper = _mount(Component)
    wrapper.setProps(this.props)
    return wrapper
  }

  function shallow() {
    const wrapper = _shallow(Component)
    wrapper.setProps(this.props)
    return wrapper
  }
}

export function wait() {
  return new Promise(resolve => setTimeout(resolve))
}
