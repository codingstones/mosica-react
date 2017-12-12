import { Wrap } from '../../../test/helpers'
import React from 'react'
import Place from '../Place'

describe('Place', () => {
  it('shows date', () => {
    const place = 'Cuenca'
    const wrapper = Wrap(<Place place={place}/>).mount()

    expect(wrapper.text()).toContain(place)
  })
})
