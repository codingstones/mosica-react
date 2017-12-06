import React from 'react'
import { Item } from 'semantic-ui-react'
import BuyTickets from './BuyTickets'
import Likes from './Likes'
import Place from './Place'
import Price from './Price'
import Time from './Time'

export const GigRow = (props) => {
  const {gig, onClick} = props
  return (
    <Item key={gig.id} onClick={onClick(gig.id)}>
      <Item.Content>
        <Item.Header as='h3'>
          {gig.title}
        </Item.Header>
        <Item.Description>
          <Place place={gig.place}/>
          <span><Time hour={gig.hour}/></span>
        </Item.Description>
        <Item.Extra>
          <Price price={gig.price}/>
          <span></span>
          <Likes></Likes>
          <BuyTickets url='any' />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}