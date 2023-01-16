input.onButtonPressed(Button.A, function () {
    Jugador_arriba.change(LedSpriteProperty.Y, -1)
    Jugador_abajo.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    Jugador_arriba.change(LedSpriteProperty.Y, 1)
    Jugador_abajo.change(LedSpriteProperty.Y, 1)
})
let Jugador_abajo: game.LedSprite = null
let Jugador_arriba: game.LedSprite = null
Jugador_arriba = game.createSprite(1, 3)
Jugador_abajo = game.createSprite(1, 4)
let Obstaculo = game.createSprite(4, 4)
basic.forever(function () {
    Obstaculo.change(LedSpriteProperty.X, -1)
    basic.pause(500)
    if (Obstaculo.get(LedSpriteProperty.X) == 0) {
    	
    }
})
