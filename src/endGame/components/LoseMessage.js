import React from 'react'

export default ( props ) => {
  return (
    <div className='jumbotron'>
      <h1>My Condolences!</h1>
      <h3>You've succombed to {props.name.params.name}</h3>
      <p>Although tried your hardest, this dungeon was filled with dangerous rooms, swarming with viscious monsters. You were devoured before you were able to find the key and navigate your way to safety. You should be devestated! But even in the darkest of moments, there is still hope. If you are up for another chance to redeem yourself and escape the dugneon once and for all, try your skill and luck again. Your future awaits!</p>
    </div>
  )
}
