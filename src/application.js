let canvas = new Canvas('game', 800, 800);
let pixel = new Pixel(canvas);
let game = new Game(canvas, pixel, 200);

pixel.loadSprites({
    weirdPeace : { frames : [rawSprites.weirdPeace], colors : rawSprites.weirdPeaceColors},
    cube : { frames : [rawSprites.cube], colors : rawSprites.cubeColors},
    t : { frames : [rawSprites.t], colors : rawSprites.tColors},
    l : { frames : [rawSprites.l], colors : rawSprites.lColors},
    bar : { frames : [rawSprites.bar], colors : rawSprites.barColors},
    screen : { frames : [rawSprites.screen], colors : rawSprites.screenColors},
});

let positionTop = 0;
let positionLeft = 34;
let firstPeace = true;
let peaces = [];
let peacesIds =[
    'weirdPeace',
    'cube',
    't',
    'l',
    'bar',
];

pixel.move('screen', 70, 10);
pixel.showSprite('screen');

const randStart = peacesIds[Math.floor(Math.random() * peacesIds.length)];

game.setGameLoop(() => {

    positionTop+= 5;

    if(positionTop <= 60){
        if(firstPeace){
            
            pixel.showSprite(randStart);
            pixel.move(randStart, positionTop, positionLeft);
        }else{
            pixel.showSprite(peaces[peaces.length - 1]);
            pixel.move(peaces[peaces.length - 1], positionTop, positionLeft);
        }
    }else{
        firstPeace = false;
        positionTop = 0;

        const randPeace = peacesIds[Math.floor(Math.random() * peacesIds.length)];

        peaces.push(pixel.cloneSprite(randPeace, 10, 10));
    }
        
    if(game.keyPress.left) positionLeft-=4;
    if(game.keyPress.right) positionLeft+=4;
});

game.loopStart();