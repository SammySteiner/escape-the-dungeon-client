import React from 'react'

export default ( props ) => {
  return (
    <div className='col-sm-6'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3>Continue Your Escape</h3>
        </div>
        <div className='panel-body'>
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
            {props.select ? <button className="btn btn-primary" type='submit'>Continue Dungeon</button> : ''}
          </form>
        </div>
      </div>
    </div>
  )
}
