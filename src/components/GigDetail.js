import React, { Component } from 'react'
import { gigService } from '../services/service-instances'
import { GigCard } from './GigCard'

export class GigDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {gig: {id: 1}}
  }
  async componentDidMount() {
    if (gigService._gigs.length === 0) await gigService.retrieveNextGigs()
    const gig = await gigService.retrieveAGig(this.props.match.params.id)
    this.setState({gig: gig})
  }

  render() {
    const gig = this.state.gig
    // console.log(gig)
    return (
      <GigCard gig={gig}>
      </GigCard>
    )
  }
}