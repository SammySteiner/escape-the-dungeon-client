import React from 'react'

export default ( props ) => {
  return (
    <div className='col-sm-6'>
      <h3>Continue Your Escape</h3>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>Select Dungeon:</label>
          <select onChange={props.onChange}
            className="form-control"
            value={props.select}>
            <option>Choose from the list</option>
            {props.boardList}
          </select>
        </div>
        {props.select ? <button className="btn btn-default" type='submit'>Continue Dungeon</button> : ''}
      </form>
    </div>
  )
}
