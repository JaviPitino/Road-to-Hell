# Road To Hell

# Description
- El objetivo de nuestro protagonista es llegar al infierno. Para ello deberá sortear toda clase de maleantes, principalmente sacerdotes y algún que otro Papa. 

- Al tropezar con un sacerdote tu nivel de maldad se restará en 50 puntos, pero no te preocupes, porque con cada jarra de cerveza que recojas ganarás 25 puntos. Si por un casual te quedes a 0 pierdes tu maldad y el juego.

- Si tropiezas con un Papa, mueres directamente.


# Main Funcionalities
- Movimiento hacía los lados y hacía abajo.
- Movimiento doble hacia abajo con la barra espaciadora.
- Aparición aleatoria de enemigos (sacerdotes)
- Aparición aleatoria de enemigos (Papas)
- Aparición aleatoria de premios para sumar puntos (Jarras de cerveza)
- Score que suma los puntos.
- Botón de retorno al juego.
- Botón de retorno a la pantalla principal

# Backlog Funcionalities
- Campo en la pantalla principal para insertar el nombre.
- Aparición de tu nombre con los puntos acumulados en caso de que éstoso no estén a cero.
- Aparición de mensaje cuando tu nivel de maldad se queda a cero.
- Eliminación de premios al chocarte con ellos.
- Eliminación de enemigos que no te maten directamente.
- Música.

# Project Structure
## main.js
- inputName()
- firstScreen()
- startGame()

## game.js
- class Game() 
- add personales()
- collisions()
- gameLoop()
- upGameOver() 

## player.js
- Player () { this.x; this.y; this.w; this.h; }
- drawPlayer () {}
- movePlayer () {}


# States and Transitions
- Splash screen
- Game screen
- GameOver screen

# Extra links
-

