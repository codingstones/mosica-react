import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GigsContainer from './Days';
import { GigDetail } from './GigDetail';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={GigsContainer}/>
      <Route path='/gig/:id' component={GigDetail}/>
    </Switch>
  </main>
)

export default Main