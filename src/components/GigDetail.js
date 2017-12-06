import React, { Component } from 'react'
import { gigService } from '../services/service-instances'
import Price from './Price'

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
    console.dir(this.state.gig)
    return (
      <div className="row">
        Detalle del GIG con ID {this.props.match.params.id}
        <Price gig={this.state.gig}/>
      </div>
    )
  }
}