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
    bottomMap = Array(15).fill(0);
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
        this.bottomMap = Array(15).fill(0);
        this.bottonMapPointer = 6;
        //peace control
        this.currentPeace ='';
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
    
    mapPeaceBottonStack = () =>{
        if(this.currentPeace.length > 0){
            this.bottomMap[this.bottonMapPointer] += this.getPeaceSize(this.currentPeace);
        }
    }

    //Create a new peace when another get to the botton
    //fires when a peace gets to the botton and a new one has to be created 
    gameStepPeaceGetToThebotton = () => {
    
        this.mapPeaceBottonStack();
        
        this.firstPeace = false;
        this.positionTop = 0;

        this.currentPeace = this.getRandPeace();

        this.peaces.push(this.pixel.cloneSprite(this.currentPeace, 10, 10));
    }

    getPeaceSize = (peace) => {
        return 2;
        // if(peace === 'cube') return 6;
        // if(peace === 'weirdPeace') return 6;
        // if(peace === 'bar') return 15;
        // if(peace === 'l') return 11;
        // if(peace === 't') return 6;
        // else throw 'invalid form::' + peace;
    }

    //game logic for peace droping
    gameStepDropPeaces = () => {
        this.positionTop+= 5;

        console.log(this.bottomMap)

        const botton = 60 - this.bottomMap[this.bottonMapPointer];

        if(this.positionTop <= botton){
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