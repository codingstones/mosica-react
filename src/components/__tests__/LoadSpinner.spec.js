import { LoadSpinner } from '../LoadSpinner'
import { Wrap } from '../../../test/helpers'
import React from 'react'

describe('LoadSpinner', () => {
  it('shows loading', () => {
    const wrapper = Wrap(<LoadSpinner/>).withProps({ isLoading: true }).mount()

    expect(wrapper.text()).toContain('Loading...')
  })

  it('does not show loading', () => {
    const wrapper = Wrap(<LoadSpinner/>).withProps({ isLoading: false }).mount()

    expect(wrapper.html()).toBeNull()
  })
})
