import React from 'react'
import Main from './Main'
import Header from './Header'
import { Container } from 'semantic-ui-react'
import './App.css'

const App = () => (
  <Container className="App">
    <Header />
    <Main />
  </Container>
)

export default App
