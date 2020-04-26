let canvas = new Canvas('game');
let pixel = new Pixel(canvas.context);
let game = new Game(canvas, pixel);

// Create sprites 
let sprites = {
    plataform : new Sprite(rawSprite.plataform, ['grey']),
    ship : new Sprite(rawSprite.ship, [ '#000', 'white', 'blue', 'grey' ]),
};

// create elements 
pixel.create('plataform', sprites.plataform.get());
pixel.create('ship', sprites.ship.get(), 1);

// store animation positions
let position = { ship : 63, plataform : 60 };

game.setGameLoop(() => {
    pixel.move('plataform', position.plataform, 0);
    pixel.move('ship', position.ship, 10); 
});

game.loopStart();
game.start();