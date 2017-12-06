import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'

export const GigRow = (props) => {
  const {gig, onClick} = props

  console.log(gig)

  return (
    <Item key={gig.id} onClick={onClick(gig.id)}>
      <Item.Image size='tiny' src={gig.url} />
      <Item.Content>
        <Item.Header>{gig.title}</Item.Header>
        <Item.Description>
          <Icon name='marker' color='red'/>
          {gig.place}
        </Item.Description>
        <Item.Extra>
          <Label>
            <Icon name='dollar' color='yellow'/>
            {gig.price}
          </Label>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}