import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import fetchJsonp from 'fetch-jsonp'
import * as mosicaCore from 'mosica-core'
import { HttpClient } from './services/HttpClient'
import { GigsDay } from './components/GigsDay';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { gigsByDay: [] }
  }

  async componentDidMount() {
    const gigService = new mosicaCore.GigService(HttpClient(fetchJsonp), new mosicaCore.Matcher())
    const gigsByDay = await gigService.retrieveNextGigs()
    this.setState({ gigsByDay })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo"/>
          <h1 className="App-title">Mosica React</h1>
        </header>
        <GigsDay days={this.state.gigsByDay}/>


        <div className="Day">
          DAY A BORRAR1
        </div>

      </div>
    );
  }
}

export default App;
