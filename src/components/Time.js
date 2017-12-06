import React from 'react'
import { Icon } from 'semantic-ui-react'

const Time = (props) => {
  const {hour} = props
  if (!hour) return null
  return (
    <span>
      <Icon name='time' color='green'/>
      {hour} horas
    </span>
  )
}

export default Time