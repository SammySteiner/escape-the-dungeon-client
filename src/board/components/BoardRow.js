import React from 'react'
import BoardSquare from './BoardSquare'

export default ( props ) => {
  let squares = []
  for (var i=0; i < props.size; i++){
    squares.push(<BoardSquare key={i} cell={props.boardArr[i]} size={props.size} onHover={props.onHover} x={props.x} y={i} validMove={props.validMove} shading={props.shading} hover={props.hover} onClick={props.onClick}/>)
  }
  return (
    <div className='row'>
      {squares}
    </div>
  )
}
