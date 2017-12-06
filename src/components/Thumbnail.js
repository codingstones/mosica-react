import React from 'react'
import { Image } from 'semantic-ui-react'

const Thumbnail = (props) => {
  const {url} = props
  if (!url) return null
  return (
    <Image size='small' src={url} />
  )
}

export default Thumbnail