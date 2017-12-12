import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

const randomLikes = ()=> Math.floor((Math.random() * 1000) + 1)

class Likes extends Component {
  constructor(props) {
    super(props)
    this.likes = props ? props.likes : randomLikes()
    this.state = { likes: this.likes }
  }

  like = (event)=> {
    event.stopPropagation()
    this.likes ++
    this.setState({ likes: this.likes })
  }

  render() {
    return (
      <div>
        <Button
          className='chromatic-ignore'
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