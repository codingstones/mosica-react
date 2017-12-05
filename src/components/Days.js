import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { gigService } from '../services/service-instances'
import { MosicaRouter } from '../services/MosicaRouter'
import { Day } from './Day'
import { LoadSpinner } from './LoadSpinner'

export class DaysWithoutRouter extends Component {
  constructor(props) {
    super(props)
    this.state = { gigsByDay: [], isLoading: true }
    this.router = MosicaRouter(this.props.history)
  }

  async componentDidMount() {
    const gigsByDay = await gigService.retrieveNextGigs()
    this.setState({ isLoading: false })
    return this.setState({ gigsByDay })
  }

  goToGig = (gigId) => ()=> {
    this.router.navigateToGig(gigId);
  }

  render() {
    return (
      <div>
        <LoadSpinner isLoading={this.state.isLoading}/>
        {this.state.gigsByDay.map((day) =>
          <Day key={day.day} day={day} onClick={this.goToGig}/>
        )}
      </div>
    );
  }
}

export default withRouter(DaysWithoutRouter);
