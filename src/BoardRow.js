import React from 'react'
import BoardSquare from './BoardSquare'

export default ( props ) => {
  let squares = []
  for (var i=0; i < props.size; i++){
    squares.push(<BoardSquare cell={props.boardArr[i]} size={props.size}/>)
  }
  return (
    <div className='row'>
      {squares}
    </div>
  )
}
