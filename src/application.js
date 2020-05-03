let canvas = new Canvas('game', 800, 800);
let pixel = new Pixel(canvas);
let game = new Game(canvas, pixel);

pixel.loadSprites({
    cube : { frames : [rawSprites.cube], colors : rawSprites.cubeColors},
    screen : { frames : [rawSprites.screen], colors : rawSprites.screenColors},
});

let positionTop = 0;
let positionLeft = 34;
let firstPeace = true;
let peaces = [];

pixel.move('screen', 70, 10);

game.clockSpeed = 200;

game.setGameLoop(() => {

    positionTop+= 5;

    if(positionTop <= 60){
        if(firstPeace){
            pixel.move('cube', positionTop, positionLeft);
        }else{
            pixel.move(peaces[peaces.length - 1], positionTop, positionLeft);
        }
    }else{
        firstPeace = false;
        positionTop = 0;

        peaces.push(pixel.cloneSprite('cube', 10, 10));
    }
        
    if(game.keyPress.left) positionLeft-=4;
    if(game.keyPress.right) positionLeft+=4;
});

game.loopStart();