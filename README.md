# Escape the Dungeon
## Client application

Escape the Dungeon is a simple game where you navigate your hero through a monster filled dungeon and try to escape before being gobbled up. To create a dungeon, just enter a name in the form. If that name is already taken, you'll get an error message. You can select the number of monsters you want in your dungeon to make the game easier or harder. The default is 12.

Inside the dungeon, you want to take a good look where the door and key are because the monsters can cover them up when they move. You can move your hero with the mouse by clicking on any adjacent tile, up, right, left, or down. When you move, all the monsters will move to a random tile one tile away from their current tile, either up, down, left, or right.

If you and a monster land on the same tile, your hero will be gobbled up and you will lose. Your game will also be deleted and you will not be able to continue. If you visit the door before picking up the key nothing will happen. To pick up the key, just land on it's cell. When you visit the door, while holding the key, you will escape.

If you refresh the page, your dungeon will still be preserve. If you leave the page, you can always continue from where you left off by selecting your dungeon by name in the list to the right of the dungeon creation form.

Good luck and have fun!

## Demo

![Escape the Dungeon Demo](public/EscapeDemo.gif)

## Installation

run `npm install` to set up the install the node modules and create the dependencies. This will create your pakage-json.lock file.

If you are running this off a different database than the one hosted on heroku, you will need to modify the url in 'src/api/index.js' on line 1. This should point to wherever your database lives. If you forked and cloned Habits-Api as well, you'll want to point the api requests to 'http://localhost:3000/api/v1'.

run `npm start` to run this on a localhoast server.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
