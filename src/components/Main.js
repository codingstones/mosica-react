import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GigsContainer from './Days'
import { GigDetail } from './GigDetail'
export const GIG_DETAIL_PATH = '/gig/'
const GIG_DETAIL_PATH_WITH_ID = '/gig/:id'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={GigsContainer}/>
      <Route path={GIG_DETAIL_PATH_WITH_ID} component={GigDetail}/>
    </Switch>
  </main>
)

export default Main