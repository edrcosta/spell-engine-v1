let canvas = new Canvas('game', 800, 800);
let pixel = new Pixel(canvas);
let game = new Game(canvas, pixel);

pixel.loadSprites({
    cube : { frames : [rawSprites.cube], colors : rawSprites.cubeColors},
    screen : { frames : [rawSprites.screen], colors : rawSprites.screenColors},
});

let positionTop = 0;
let positionLeft = 34;

pixel.move('screen', 70, 10);

game.clockSpeed = 200;
game.setGameLoop(() => {

    positionTop+= 3;
    if(positionTop <= 60){
        pixel.move('cube', positionTop, positionLeft);
    }else{
        pixel.cloneSprite('cube', 10, 10);
    }
        
    if(game.keyPress.left){
        positionLeft-=5;
    }

    if(game.keyPress.right){
        positionLeft+=5
    }
});

game.loopStart();