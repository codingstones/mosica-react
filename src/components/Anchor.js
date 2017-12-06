import React from 'react'
import { Icon } from 'semantic-ui-react'

const Anchor = (props) => {
  const {icon, url} = props
  if (!url) return null
  return (
    <span>
      <Icon size='big' name={icon} color='blue' link={url}/>
    </span>
  )
}

export default Anchor