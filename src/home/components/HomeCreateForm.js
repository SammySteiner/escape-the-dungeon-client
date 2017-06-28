import React from 'react'

export default ( props ) => {
  return (
    <div className='col-sm-6'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3>Create New Dungeon</h3>
        </div>
        <div className='panel-body'>
          <form onSubmit={props.onSubmit}>
            <label>Dungeon Name:</label>
            <div className="form-group">
              <input type='text' value={props.name} onChange={props.onNameChange}/>
            </div>
            {/* <label>Dungeon Size:</label>
            <div className="form-group">
              <select value={props.size} onChange={props.onSizeChange} selected='Hard'>
                <option value='6'>Easy</option>
                <option value='12'>Hard</option>
              </select>
            </div> */}
            <label>Number of Monsters:</label>
            <div className="form-group">
              <input type='number' value={props.monsters} onChange={props.onMonstersChange}/>
            </div>
            <button className="btn btn-primary" type='submit'>Build Dungeon</button>
          </form>
        </div>
      </div>
    </div>
  )
}
