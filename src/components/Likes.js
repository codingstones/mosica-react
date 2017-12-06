import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class Likes extends Component {
  constructor() {
    super()
    this.state = { likes: Math.floor((Math.random() * 1000) + 1) }
    this.likes = this.state.likes
  }

  like = (event)=> {
    event.stopPropagation()
    console.log('Liking', event)
    this.likes ++
    this.setState({ likes: this.likes })
  }

  render() {
    return (
      <div>
        <Button
          color='red'
          content='Like'
          size='mini'
          icon='heart'
          label={{basic: true, color: 'red', pointing: 'left', content: this.likes}}
          onClick={this.like}
        />
      </div>
    )
  }
}

export default Likes