import React from 'react'

export const LoadSpinner = (props) => {
  const {isLoading} = props

  if (isLoading) {
    return (
      <div className="spinner">
        <p>Loading...</p>
      </div>
    )
  } else {
    return null
  }
}