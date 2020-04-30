/**
 * this is custom game 
 */

let canvas = new Canvas('game', 800, 800);
let pixel = new Pixel(canvas);
let game = new Game(canvas, pixel);

// // Create sprites 
// pixel.loadSprites({
//     plataform : { frames : [rawSprite.plataform], colors : rawSprite.plataformColors},
//     ship : { frames : [rawSprite.ship], colors :rawSprite.shipColors},
// });

// // store animation positions
// let position = { ship : 63, plataform : 60 };

// let world_left = 0;

game.setGameLoop(() => {
    // if(game.gameLoopCount === 0){
    //     pixel.move('plataform', position.plataform, 0);
    //     pixel.move('ship', position.ship, 10);    
    // }else{
        
    //     pixel.moveUserView(0, 1);
        
    //     // if(game.keyPress.up){
    //     //     pixel.move('ship', position.ship-=3, 10);
    //     // }

    //     // if(position.ship < 63){
    //     //     pixel.move('ship', position.ship++, 10);
    //     // }
    // }
});

game.loopStart();