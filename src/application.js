let canvas = new Canvas('game', 800, 800);
let pixel = new Pixel(canvas);
let game = new Game(canvas, pixel, 200);

pixel.loadSprites({
    cube : { frames : [rawSprites.cube], colors : rawSprites.cubeColors},
    bar : { frames : [rawSprites.bar], colors : rawSprites.barColors},
    screen : { frames : [rawSprites.screen], colors : rawSprites.screenColors},
});

let positionTop = 0;
let positionLeft = 34;
let firstPeace = true;
let peaces = [];
let peacesIds =['cube', 'bar'];

pixel.move('screen', 70, 10);
pixel.showSprite('screen');

game.setGameLoop(() => {

    positionTop+= 5;

    if(positionTop <= 60){
        if(firstPeace){
            pixel.showSprite('cube');
            pixel.move('cube', positionTop, positionLeft);
        }else{
            pixel.showSprite(peaces[peaces.length - 1]);
            pixel.move(peaces[peaces.length - 1], positionTop, positionLeft);
        }
    }else{
        firstPeace = false;
        positionTop = 0;

        var item = peacesIds[Math.floor(Math.random() * peacesIds.length)];

        peaces.push(pixel.cloneSprite(item, 10, 10));
    }
        
    if(game.keyPress.left) positionLeft-=4;
    if(game.keyPress.right) positionLeft+=4;
});

game.loopStart();