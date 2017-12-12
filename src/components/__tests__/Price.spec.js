import { Wrap } from '../../../test/helpers'
import React from 'react'
import Price from '../Price'

describe('Price', () => {
  it('shows date', () => {
    const price = '25 €'
    const wrapper = Wrap(<Price price={price}/>).mount()

    expect(wrapper.text()).toContain(price)
  })
})
