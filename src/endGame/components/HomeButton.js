import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className='col-sm-6'>
      <h3>Return to the Entrance</h3>
      <Link to={`/`} className='btn btn-primary'>Home</Link>
    </div>
  )
}
