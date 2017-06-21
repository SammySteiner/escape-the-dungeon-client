const url = 'https://dry-oasis-60966.herokuapp.com/api/v1/'

export function fetchBoards() {
  return fetch(url + "boards")
    .then( res => res.json() )
}

export function createBoard(name, size, monsters){
  return fetch(url + "boards", {
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
  return fetch(url + "boards/" + name )
    .then( res => res.json() )
}

export function updateBoard(board){
  return fetch(url + "boards/" + board.name, {
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
  return fetch(url + "boards/" + name, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify( { board: {name: name} } )
  })
  .then( res => res.json() )
}
