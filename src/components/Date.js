import React from 'react'
import { Icon } from 'semantic-ui-react'

const Date = (props) => {
  const {date} = props
  return (
    <span>
      <Icon name='calendar' color='green'/>
      {date}
    </span>
  )
}

export default Date