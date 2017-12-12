import React from 'react'
import { Wrap } from '../../../test/helpers'
import Location from '../Location'

describe('Location', () => {
  it('shows link', () => {
    const wrapper = Wrap(<Location coordinates={'ANY COORDINATES'}/>).mount()

    expect(wrapper.text()).toContain('¿Cómo llegar?')
  })
})
