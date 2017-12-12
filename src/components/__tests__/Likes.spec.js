import Likes from '../Likes'
import { Wrap } from '../../../test/helpers'
import React from 'react'

describe('Likes', () => {
  it('shows like', () => {
    const wrapper = Wrap(<Likes likes={25}/>).mount()

    expect(wrapper.text()).toContain('Like25')
  })

  it('increases likes when clicking', () => {
    const wrapper = Wrap(<Likes likes={25}/>).mount()

    wrapper.find('button').first().simulate('click')

    expect(wrapper.text()).toContain('Like26')
  })
})
