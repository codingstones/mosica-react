import React from 'react'

const openMap = (coordinates) => () => {
  console.log('KIO');
  const url = "https://www.google.es/maps/place/" + coordinates
  window.open(url, '_blank', 'location=yes')
}

const Location = (props) => {
  const {coordinates} = props
  if (!coordinates) return null
  return (
    <a target="_blank" onClick={openMap(coordinates)}>¿Cómo llegar?</a>
  )
}

export default Location