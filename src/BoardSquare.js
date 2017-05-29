import React from 'react'

export default ( props ) => {
  let width = 12 / props.size
  return(
    <div className={`col-sm-${width} height square`}>{props.cell}</div>
  )
}
