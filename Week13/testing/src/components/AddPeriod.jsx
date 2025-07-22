import React from 'react'

const AddPeriod = ({name}) => {
  return (
      <div><h3>AddPeriod</h3><p>Hello {name ? `${name}.` : ""}</p></div>
  )
}

export default AddPeriod