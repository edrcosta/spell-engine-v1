let canvas = new Canvas('game', 800, 800);
let pixel = new Pixel(canvas);
let game = new Game(canvas, pixel, 200);

pixel.loadSprites({
    stuart : { frames : [rawSprites.stuart], colors : rawSprites.stuartColors},
    plataform : { frames : [rawSprites.plataform], colors : rawSprites.plataformColors},
    raio : { frames : [rawSprites.raio], colors : rawSprites.raioColors},
});

pixel.showSprite('stuart');
pixel.move('stuart', 70, 10);

pixel.showSprite('raio');
pixel.move('plataform', 10, 10);

let positions = {
    player : { left : 10, top : 60 }
};

game.setGameLoop(() => {
    
    // pixel.move('stuart', positions.player.top--, positions.player.left);

    // if(game.keyPress.left) playerPosition.left-=4;
    // if(game.keyPress.right) playerPosition.left+=4;
    // if(game.keyPress.top) playerPosition.top-=10;
});

game.loopStart();