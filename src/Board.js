import React from 'react'
import './board.css'
import BoardRow from './BoardRow'

export default ( props ) => {
  let rows = []
  for (var i=0; i < props.size; i++){
    rows.push(<BoardRow boardArr={props.boardArr[i]} size={props.size}/>)
  }
  return (
    <div>
      {rows}
    </div>
  )
}
