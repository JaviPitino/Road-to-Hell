# Road To Hell

## Description
- Road To hell is a game inspired by classic games of the 80s. It consists of avoiding collisions with the enemies that appear and collecting beer mugs.

- The goal of our protagonist is to hold out as long as possible to get to hell. The player will have to avoid all kinds of crooks, mainly priests and the occasional pope.

- When you bump into a priest, your evilness level will be subtracted by 50 points, but don't worry, because with each mug of beer you collect, you will gain 25 points. If by any chance your score drops to 0, you lose your evilness and the game. 

- If you trip over a pope, you die directly.


## Main Funcionalities
- Move sideways and downward
- Double downward movement with the space bar
- Random appearance of enemies (priests)
- Random appearance of enemies (Popes)
- Random appearance of prizes to add points (beer mugs)
- Score that adds up the points
- Button to return to the game
- Button to return to the main screen
- Text field in the main screen to insert your name
- Display of your name with the accumulated points in case they are not at zero.
- Appearance of message when your evilness level is zero
- Elimination of prizes when you collide with them
- Elimination of enemies that do not kill you directly
- Music

## Backlog Funcionalities
- Display a ranking with the best scores
- Improve the movement of the main character
- Wellcome to hell screen when you manage to win with a high score cap

## Project Structure
### main.js
- Global variables
- General audio
- Set and reset player's name
- Global function: startGame()
- pressMovePlayer()
- addEventListeners()

### game.js
- Class Game() 
- Game properties
- Methods for creating characters
- Collision methods
- GameOver when you go up to the sky
- Method to increase the difficulty of the game
- GameLoop()

### player.js, beer.js, priest.js, pope.js
- Character properties
- Method to draw the character
- Method to move the character


## States and Transitions
- Splash screen
- Game screen
- GameOver screen

## Extra links

### GitHub
https://javipitino.github.io/Road-to-Hell/

### Trello

### Slides


