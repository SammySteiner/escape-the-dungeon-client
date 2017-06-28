import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className='col-sm-6'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3>Return to the Entrance</h3>
        </div>
        <div className='panel-body'>
          <Link to={`/`} className='btn btn-success'>Home</Link>
        </div>
      </div>
    </div>
  )
}
