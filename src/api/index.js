export function fetchBoards() {
  return fetch("http://localhost:3000/api/v1/boards")
    .then( res => res.json() )
}

export function createBoard(name, size, monsters){
  return fetch("http://localhost:3000/api/v1/boards", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify( {board: {name: name, size: size, monsters: monsters}} )
  })
  .then( res => res.json() )
}

export function showBoard(name){
  return fetch("http://localhost:3000/api/v1/boards/" + name )
    .then( res => res.json() )
}

export function updateBoard(board){
  return fetch("http://localhost:3000/api/v1/boards/" + board.name, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify( { board } )
  })
  .then( res => res.json() )
}

export function deleteBoard(name) {
  return fetch("http://localhost:3000/api/v1/boards/" + name, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify( { board: {name: name} } )
  })
  .then( res => res.json() )
}
