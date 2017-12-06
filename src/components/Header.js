import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import logo from '../logo.png'

const MosicaHeader = () => (
  <Header as="h1">
    <Image src={logo} alt="logo"/>
    <Header.Content>
      Mosica React
      <Header.Subheader>
        <a href="http://twitter.com/intent/tweet?text=En%20@mosicazgz%20encuentras%20%23buenamierda%20musical%20y%20todos%20los%20pr%C3%B3ximos%20conciertos%20en%20%23zaragoza%20-%20http://mosica.es" target="blank">#BuenaMierda </a>
        para tus oídos
      </Header.Subheader>
    </Header.Content>
  </Header>
)

export default MosicaHeader