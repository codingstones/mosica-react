import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const buyTickets = (url) => (event) => {
  event.stopPropagation()
  console.log('Buying ticket ' + url)
}
const BuyTickets = (props) => {
  const {url} = props
  return (
    <Button primary floated='right' onClick={buyTickets(url)}>
      Buy tickets
      <Icon name='right chevron' />
    </Button>
  )
}

export default BuyTickets