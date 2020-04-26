/**
 * this is custom game 
 */

 //instancing the "engine" kkk
let canvas = new Canvas('game');
let pixel = new Pixel(canvas.context);
let game = new Game(canvas, pixel);

// Create sprites 
let sprites = {
    plataform : new Sprite(rawSprite.plataform, rawSprite.plataformColors),
    ship : new Sprite(rawSprite.ship, rawSprite.shipColors),
};

// create elements 
pixel.create('plataform', sprites.plataform.get());
pixel.create('ship', sprites.ship.get(), 1);

// store animation positions
let position = { ship : 63, plataform : 60 };

let world_left = 0;

game.setGameLoop(() => {
    if(game.gameLoopCount === 0){
        pixel.move('plataform', position.plataform, 0);
        pixel.move('ship', position.ship, 10);    
    }else{
        
        pixel.move('plataform', position.plataform, world_left--);

        if(game.keyPress.up){
            pixel.move('ship', position.ship-=3, 10);
        }

        if(position.ship < 63){
            pixel.move('ship', position.ship++, 10);
        }
    }
});

//lets start our loop
game.loopStart();
//start the game latter this will load user data
game.start();