import React from 'react'

export default ( props ) => {
  let width = 12 / props.size


  return(
    <div className={`col-sm-${width} height square`}
      id={[props.x + 1, props.y + 1]}
      onMouseOver={props.onHover}
      onClick={props.onClick}>{props.cell}{(props.hover[0] === props.x + 1 && props.hover[1] === props.y + 1) ? props.shading : ''}</div>
  )
}
