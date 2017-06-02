import React from 'react'

export default ( props ) => {
  return (
    <div className='col-sm-6'>
      <h3>Create New Dungeon</h3>
      <form onSubmit={props.onSubmit}>
        <label>Dungeon Name:</label>
        <div className="form-group">
          <input type='text' value={props.name} onChange={props.onNameChange}/>
        </div>
        <label>Dungeon Size:</label>
        <div className="form-group">
          <input type='text' value={props.size} onChange={props.onSizeChange}/>
        </div>
        <label>Number of Monsters:</label>
        <div className="form-group">
          <input type='number' value={props.monsters} onChange={props.onMonstersChange}/>
        </div>
        <button className="btn btn-default" type='submit'>Build Dungeon</button>
      </form>
    </div>
  )
}
