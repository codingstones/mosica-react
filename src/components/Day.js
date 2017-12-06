import React from 'react'
import { Header, Item, Segment } from 'semantic-ui-react'
import { GigRow } from './GigRow'

export const Day = (props) => {
  const {day, onClick} = props
  return (
    <div>
      <Header as='h2' textAlign='center'>{day.day}</Header>
      <Segment.Group raised>
        <Item.Group key={day.day} divided link>
          {day.gigs.map((gig) =>
            <GigRow key={gig.id} gig={gig} onClick={onClick} />
          )}
        </Item.Group>
      </Segment.Group>
    </div>
  )
}