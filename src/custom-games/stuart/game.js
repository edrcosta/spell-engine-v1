let canvas = new Canvas('game', 800, 800);
let pixel = new Pixel(canvas);
let game = new Game(canvas, pixel, 200);

pixel.loadSprites({
    stuart : { frames : [rawSprites.stuart], colors : rawSprites.stuartColors},
});

pixel.showSprite('stuart');
pixel.move('stuart', 70, 10);

let positions = {
    player : { left : 10, top : 60 }
};

game.setGameLoop(() => {
    // positions.player.top-=2;

    pixel.move('stuart', positions.player.top, positions.player.left);

    if(game.keyPress.left) positions.player.left-=4;
    if(game.keyPress.right) positions.player.left+=4;
    if(game.keyPress.top) positions.player.top-=10;
});

game.loopStart();