export function fetchBoards() {
  return fetch("http://localhost:3000/api/v1/boards")
    .then( res => res.json() )
}

export function createBoard(name){
  return fetch("http://localhost:3000/api/v1/boards", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify( {board: {name: name}} )
  })
  .then( res => res.json() )
}

export function showBoard(name){
  return fetch("http://localhost:3000/api/v1/boards/" + name )
    .then( res => res.json() )
}
