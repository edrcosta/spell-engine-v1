class Sprite{

    frames;
    colors;
    
    constructor(frames, colors){
        this.frames = frames;   
        this.colors = colors;
    }

    /**
     * replace bitmap color index by respective css color code in colors array
     */
    get = (x, y, frameNumber) =>{
        return this.frames[frameNumber].map((row) => row.map((pixel) => this.colors[pixel]));
    }
}
class Pixel{

    context;
    pixelSize = 10;
    userview = 0;
    spriteList =  {};
    bitmap = [];
    emptyBitmap = [];

    constructor(canvas){
        this.context = canvas.context;        
        this.canvas = canvas;        
    
        this.initializeBitmap();
    }

    //Create a bitmap empty array
    initializeBitmap = () => {
        
        let emptyBimapArray = [];
        for (let i = 0; i <= 71; i++) {
            emptyBimapArray.push(Array(71).fill(false));            
        }

        this.emptyBitmap = emptyBimapArray;
        this.bitmap = emptyBimapArray;
    }

    //clear the entire canvas
    clearBitmap = () => {
        let empty = this.emptyBitmap;
        this.bitmap = empty;
    }

    //Draw a single pixel 
    drawPixel = (x, y, color) => {
        
        x = this.pixelSize * x;
        y = this.pixelSize * y;

        this.context.fillStyle = color;

        this.context.fillRect(x, y, this.pixelSize, this.pixelSize);
        this.context.fillRect(x, y, this.pixelSize, this.pixelSize);    
    }
    
    //move a sprite element 
    move = (id, x, y) => {
        this.spriteList[id].x = x;
        this.spriteList[id].y = y;
    }

    //create a new sprite element
    create = (id, sprite) => {
        this.spriteList[id] = { sprite : sprite };
    }
    
    moveUserView = (x, y) => {
        this.userview = { x : x, y : y };
    }
    
    //map sprites by id and create the x and y coords
    loadSprites = (spriteList) => {
        
        let spriteListById = {};

        Object.keys(spriteList).forEach(key => {
            spriteListById[key] = {
                x : 0,
                y : 0,
                object : new Sprite(spriteList[key].frames, spriteList[key].colors)
            };
        });

        this.spriteList = spriteListById;
    }

    //render one frame on screen
    render = () => {

        this.clearBitmap();

        Object.keys(this.spriteList).forEach((id) => {

            const element = this.spriteList[id];

            const sprite = element.object.get(0,0, 0);
            
            sprite.forEach((row, x) => {                
                row.forEach((pixel, y) => {

                    const presentOnScreen = typeof this.bitmap[x][y] !== 'undefined';

                    if(pixel !== false && presentOnScreen) {
                        this.drawPixel(y + element.y, x + element.x, pixel);
                    }
                });
            });
        });
    }
}
/**
 * Player logic
 * 
 * - Points
 * - Saves
 * - "history line"
 * - Localization (in case of a life rpg)
 * 
 */
class Player{

}
class Game {
    
    gameLoopCallback;
    gameLoopCount = 0;
    canvas;
    pixel;
    halt = false;
    clockSpeed = 100;
    keyPress = { left : false, up : false, down : false, right : false };

    constructor(canvas, pixel){
        this.canvas = canvas;
        this.pixel = pixel;
    }

    //reset keypress values    
    resetKeyboard = () => {
        this.keyPress = { left : false, up : false, down : false, right : false };
    }

    //start multi key keypress detection 
    keyboardDetection = () => {

        // multiple keboard detection in JS is harder than looks so.. 
        let listener = new window.keypress.Listener();

        listener.counting_combo("left", () => {  this.keyPress.left = true });
        listener.counting_combo("right", () => { this.keyPress.right = true });
        listener.counting_combo("up", () => { this.keyPress.up = true });
        listener.counting_combo("down", () => { this.keyPress.down = true });
        //event the library has problens with the "diagonal"
        listener.counting_combo("left up", () => { this.keyPress.left = true; this.keyPress.up = true });
        listener.counting_combo("up right", () => { this.keyPress.right = true; this.keyPress.up = true });
    }

    //set a game loop callback
    setGameLoop = (callback) => {
        this.gameLoopCallback = callback;
    }

    loopStart = () => {
        
        this.keyboardDetection();
 
        this.gameLoop = setInterval((game) => {

            if(!game.halt){                
                game.gameLoopCallback();
                game.resetKeyboard();
                game.canvas.clear();
                game.pixel.render();
                game.gameLoopCount++;
            }

        }, this.clockSpeed, this);
    }

    pause = () => { this.halt = true }
    start = () => { this.halt = false }
}
class Canvas{
    
    context;
    canvas;
    screenSize;

    constructor(id, width, height){

        //js optional parameter ternary oh god i even need this yet?
        width = typeof width !== 'undefined' ? width : 800;
        height = typeof height !== 'undefined' ? height : 800;

        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');

        this.screenSize = { width : width, height : height };

        this.scale();
    }
    
    //set canvas screen size
    scale = () => {
        //prevent blurry pixels
        this.context.scale(2,2);

        this.canvas.width = this.screenSize.width;
        this.canvas.height = this.screenSize.height;        
        this.canvas.style.width = this.screenSize.width + "px";
        this.canvas.style.height = this.screenSize.height + "px";
    }

    //clear all data
    clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
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