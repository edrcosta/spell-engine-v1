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

//This executes every game clock cicle 
//the ideia is modify an bitmap in memory 
//the game "happends" on memory inside a simbolic array world
//that way we gain superpowers and be able to really manipulate pixel by pixel 
//using complex logic to create shadows etc...

game.setGameLoop(() => {

    if(game.gameLoopCount === 0){
        pixel.move('plataform', position.plataform, 0);
        pixel.move('ship', position.ship, 10);    
    }else{

        if(game.keyPress.up){
            pixel.move('ship', position.ship--, 10);
        }
        
    }
    
    
    console.log(); 
});

game.loopStart();
game.start();