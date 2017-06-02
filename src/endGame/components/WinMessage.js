import React from 'react'

export default ( props ) => {
  return (
    <div>
      <h1>Contratulations!</h1>
      <h3>You've escaped {props.name.params.name}</h3>
      <p>Although this dungeon was filled with dangerous rooms, swarming with viscious monsters, you managed to find the key and navigate your way to safety. You should be very proud! If you are up for another adventure, try your skill and luck down in another dungeon. Many more challenges await!</p>
    </div>
  )
}
