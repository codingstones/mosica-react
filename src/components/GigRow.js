import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'
import Likes from './Likes'
import Price from './Price'
import Time from './Time'

export const GigRow = (props) => {
  const {gig, onClick} = props

  console.log(gig)

  return (
    <Item key={gig.id} onClick={onClick(gig.id)}>
      {/*<Item.Image size='tiny' src={gig.url} />*/}
      <Item.Content>
        <Item.Header as='h3'>
          {gig.title}
        </Item.Header>
        <Item.Description>
          <div>
            <Icon name='marker' color='red'/>
            {gig.place}
            <Time hour={gig.hour}/>
          </div>
        </Item.Description>
        <Item.Extra>
          <Price price={gig.price}/>
          <Likes></Likes>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}