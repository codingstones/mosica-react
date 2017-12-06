import React from 'react'
import Main from './Main'
import MosicaHeader from './Header'
import { Container } from 'semantic-ui-react'
import './App.css'

const App = () => (
  <Container className="App">
    <MosicaHeader />
    <Main />
  </Container>
)

export default App
