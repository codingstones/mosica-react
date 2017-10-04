import React, { Component } from 'react';
import './App.css';
import fetchJsonp from 'fetch-jsonp'
import * as mosicaCore from 'mosica-core'
import { HttpClient } from '../services/HttpClient'
import { DayWithGigs } from './DayWithGigs';
import { LoadSpinner } from './LoadSpinner';
import { withRouter } from 'react-router-dom'
import { MyRouter } from '../services/MyRouter';


class GigsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { gigsByDay: [], isLoading: true }
    this.router = MyRouter(this.props.history)
  }

  async componentDidMount() {
    const gigService = new mosicaCore.GigService(HttpClient(fetchJsonp), new mosicaCore.Matcher())
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
        <DayWithGigs days={this.state.gigsByDay} onClick={this.goToGig}/>
      </div>
    );
  }
}

export default withRouter(GigsContainer);
export const GigsContainerWithoutRouter = GigsContainer;
