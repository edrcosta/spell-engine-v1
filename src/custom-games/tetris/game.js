class TetrisGame
{
    //engine
    canvas
    pixel
    game

    //game states
    positionTop = 0;
    positionLeft = 34;
    firstPeace = true;
    peaces = [];
    peacesIds =[
        'weirdPeace',
        'cube',
        't',
        'l',
        'bar',
    ];
    
    sprites = {
        weirdPeace : { frames : [rawSprites.weirdPeace], colors : rawSprites.weirdPeaceColors},
        cube : { frames : [rawSprites.cube], colors : rawSprites.cubeColors},
        t : { frames : [rawSprites.t], colors : rawSprites.tColors},
        l : { frames : [rawSprites.l], colors : rawSprites.lColors},
        bar : { frames : [rawSprites.bar], colors : rawSprites.barColors},
        screen : { frames : [rawSprites.screen], colors : rawSprites.screenColors},
        screenVertical : { frames : [rawSprites.screenVertical], colors : rawSprites.screenVerticalColors},
    };

    constructor(){
        
        //loading engine
        this.canvas = new Canvas('game', 800, 800);
        this.pixel = new Pixel(this.canvas);
        this.game = new Game(this.canvas, this.pixel, 200);

        //loading bitmap sprites into memory 
        this.pixel.loadSprites(this.sprites);
    }

    reset(){
        //render basic game ui
        this.pixel.move('screen', 70, 10);
        this.pixel.showSprite('screen');

        this.pixel.move('screenVertical', 10, 10);
        this.pixel.showSprite('screenVertical');

        
    }

    getRandPeace = () => this.peacesIds[Math.floor(Math.random() * this.peacesIds.length)]

    gameFrame = () => {

        // console.log(this.getRandPeace());
        this.pixel.showSprite('cube');
        this.pixel.move('cube', 10, 10);
    }

    gameStart = () => {
        this.game.setGameLoop(this.gameFrame);
        this.game.loopStart();
    }
}

let tetris = new TetrisGame();

tetris.reset();
tetris.gameStart();
// let canvas = new Canvas('game', 800, 800);
// let pixel = new Pixel(canvas);
// let game = new Game(canvas, pixel, 200);

// pixel.loadSprites({
//     weirdPeace : { frames : [rawSprites.weirdPeace], colors : rawSprites.weirdPeaceColors},
//     cube : { frames : [rawSprites.cube], colors : rawSprites.cubeColors},
//     t : { frames : [rawSprites.t], colors : rawSprites.tColors},
//     l : { frames : [rawSprites.l], colors : rawSprites.lColors},
//     bar : { frames : [rawSprites.bar], colors : rawSprites.barColors},
//     screen : { frames : [rawSprites.screen], colors : rawSprites.screenColors},
// });

// let positionTop = 0;
// let positionLeft = 34;
// let firstPeace = true;
// let peaces = [];
// let peacesIds =[
//     'weirdPeace',
//     'cube',
//     't',
//     'l',
//     'bar',
// ];


// const randStart = peacesIds[Math.floor(Math.random() * peacesIds.length)];


//  const randStart= this.getRandPeace();
    
//             this.positionTop+= 5;
    
//             if(this.positionTop <= 60){
//                 if(this.firstPeace){
                    
//                     this.pixel.showSprite(randStart);
//                     this.pixel.move(randStart, this.positionTop, this.positionLeft);
//                 }else{
//                     this.pixel.showSprite(this.peaces[this.peaces.length - 1]);
//                     this.pixel.move(this.peaces[this.peaces.length - 1], this.positionTop, this.positionLeft);
//                 }
//             }else{
//                 this.firstPeace = false;
//                 this.positionTop = 0;
    
//                 const randPeace = this.peacesIds[Math.floor(Math.random() * this.peacesIds.length)];
    
//                 this.peaces.push(this.pixel.cloneSprite(randPeace, 10, 10));
//             }
                
//             if(this.game.keyPress.left) this.positionLeft-=4;
//             if(this.game.keyPress.right) this.positionLeft+=4;