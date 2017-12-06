import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

const Price = (props) => {
  const {price} = props
  if (!price) return null
  return (
    <Label basic color='grey'>
      <Icon name='dollar' color='yellow'/>
      {price}
    </Label>
  )
}

export default Price