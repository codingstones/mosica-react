import React from 'react'

const downloadICS = (slug) => () => {
  const BASE_URL = "http://www.mosica.es/"
  var download_url = `${BASE_URL}conciertos/${slug}.ics`
  window.open(download_url, '_system')
}

const ICS = (props) => {
  const {slug} = props
  if (!slug) return null
  return (
    <a target='_blank' onClick={downloadICS(slug)}>Añádelo a tu calendario</a>  )
}

export default ICS