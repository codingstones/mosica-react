import Date from '../Date'
import { Wrap } from '../../../test/helpers'
import React from 'react'

describe('Date', () => {
  it('shows date', () => {
    const date = '2017-03-12'
    const wrapper = Wrap(<Date date={date}/>).mount()

    expect(wrapper.text()).toContain(date)
  })
})
