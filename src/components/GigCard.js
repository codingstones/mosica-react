import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import BuyTickets from './BuyTickets'
import Date from './Date'
import ICS from './ICS'
import Likes from './Likes'
import Location from './Location'
import Place from './Place'
import Price from './Price'
import Space from './Space'
import Time from './Time'

export const GigCard = (props) => {
  const {gig} = props
    return (
      <Card fluid raised color='blue'>
        <Card.Content>
        <Card.Header>
          {gig.title}
        </Card.Header>
      <Card.Meta>
        <Space/>
        <Date date={gig.day}></Date>
        <div></div>
        <Time hour={gig.hour}></Time>
        <div></div>
        <Price price={gig.price}></Price>
        <div></div>
        <ICS slug={gig.slug}></ICS>
        <Space/>
      </Card.Meta>
      <Card.Description>
        <Image floated='right' height='300em' src={gig.image_url} />
        {gig.description}
        <Space/>
        <Place place={gig.place} />  <Location coordinates={gig.lat_lng}></Location>
        <Space/>
        <BuyTickets url='any' />
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Likes></Likes>
        {/*<Anchor icon="twitter square" url="http://twiiter.com"></Anchor>*/}
      </Card.Content>
    </Card>
    )
}