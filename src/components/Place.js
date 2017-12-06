import React from 'react'
import { Icon } from 'semantic-ui-react'

const Place = (props) => {
  const {place} = props
  if (!place) return null
  return (
    <span>
      <Icon name='marker' color='red'/>
      {place}
    </span>
  )
}

export default Place