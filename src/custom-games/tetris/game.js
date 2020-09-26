/**
 * @todo fix this bottom problem coordenates are inverted this make crazy to catesian adpt any calculation
 */

class TetrisGame
{
    //engine
    canvas
    pixel
    game

    //Positions
    positionTop = 0;
    positionLeft = 34;
    
    //Bottom stack mapping
    bottomMap = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
    bottonMapPointer = 6;
    
    //peace control
    currentPeace ='';
    firstPeace = true;
    
    peaces = [];
    peacesIds =[
        'weirdPeace',
        'cube',
        't',
        'l',
        'bar',
    ];
    
    /**
     * store game sprites
     */
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

        this.randStart = this.getRandPeace();
        this.currentPeace = this.randStart;
    }

    //Reset the game to the start states
    reset = () => {
        //render basic game ui
        this.pixel.showSprite('screen');
        this.pixel.showSprite('screenVertical');

        this.pixel.move('screen', 70, 10);
        this.pixel.move('screenVertical', 10, 10);
        //Positions
        this.positionTop = 0;
        this.positionLeft = 34;
        //Bottom stack mapping
        this.bottomMap = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
        this.bottonMapPointer = 6;
        //peace control
        this.currentPeace = this.randStart;
        this.firstPeace = true;
    }

    //get a randon tetris peace 
    getRandPeace = () => this.peacesIds[Math.floor(Math.random() * this.peacesIds.length)];

    //fires every frame when a peace is falling down
    gameStepDropPeace = () => {

        const peace = this.firstPeace ? this.randStart : this.peaces[this.peaces.length - 1];

        this.pixel.showSprite(peace);
        this.pixel.move(peace, this.positionTop, this.positionLeft);        
    }
    
    //this array will map the bottom of the game with the cumulative effect of the peaces dropping
    counter = 0;
    mapPeaceBottonStack = () =>{
        /**
         * 
         * @todo fix #cartesian inversion bug chrome
         */
        let size = 0;
        let cumulativeFix = 0;
        if(this.currentPeace === 'cube') {
            size = 2;
        }

        if(this.currentPeace === 'weirdPeace') {
            size = 2;
        }

        if(this.currentPeace === 'bar') {
            size = 4;
        }

        if(this.currentPeace === 'l') {
            size = 2;
        }
        
        if(this.currentPeace === 't') {
            size = 2;
        }

        this.bottomMap[this.bottonMapPointer] += size;
    }

    //Create a new peace when another get to the botton
    //fires when a peace gets to the botton and a new one has to be created 
    gameStepPeaceGetToThebotton = () => {
    
        console.log(this.bottomMap);
        this.mapPeaceBottonStack();
        
        this.firstPeace = false;
        this.positionTop = 0;

        this.currentPeace = this.getRandPeace();

        this.peaces.push(this.pixel.cloneSprite(this.currentPeace, 10, 10));
    }

    //game logic for peace droping
    gameStepDropPeaces = () => {
        this.positionTop+= 4;
        console.log(this.positionTop);
        if(this.positionTop <= this.bottomMap[this.bottonMapPointer]){
            this.gameStepDropPeace();
        }else{
            this.gameStepPeaceGetToThebotton();
        }
    }

    gameLoop = () => {

        this.gameStepDropPeaces();

        if(this.game.keyPress.left){
            this.positionLeft-=4;
            this.bottonMapPointer--;
        }
        
        if(this.game.keyPress.right){
            this.positionLeft+=4;
            this.bottonMapPointer++;
        }
    }

    gameStart = () => {
        this.game.setGameLoop(this.gameLoop);
        this.game.loopStart();
    }
}

let tetris = new TetrisGame();

tetris.reset();
tetris.gameStart();