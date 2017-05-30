import React from 'react'
import './board.css'
import BoardRow from './BoardRow'

export default ( props ) => {
  let rows = []
  for (var i=0; i < props.size; i++){
    rows.push(<BoardRow key={i} boardArr={props.boardArr[i]} size={props.size} onHover={props.onHover} x={i} shading={props.shading} hover={props.hover} validMove={props.validMove} onClick={props.onClick}/>)
  }
  return (
    <div>
      {rows}
    </div>
  )
}
