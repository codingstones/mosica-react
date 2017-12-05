import React from 'react';
import { Segment } from 'semantic-ui-react'

export const GigRow = (props) => {
  const {gig, onClick} = props

  return (
    <Segment key={gig.id}
       onClick={onClick(gig.id)}>
       {gig.title}-{gig.place}
    </Segment>
  )
}