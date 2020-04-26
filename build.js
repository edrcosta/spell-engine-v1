class Sprite{

    bitmap;
    colors;
    
    constructor(bitmap, colors){
        this.bitmap = bitmap;
        this.colors = colors;
    }

    get = () => this.bitmap.map((row) => row.map((pixel) => this.colors[pixel]));
}
class Pixel{

    context;
    pixelSize = 10;
    bitmapList =  {};
    bitmap = [];
    emptyBitmap = [];

    constructor(context){
        this.context = context;        
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
        this.bitmapList[id].x = x;
        this.bitmapList[id].y = y;
    }

    //create a new sprite element
    create = (id, bitmap) => {
        this.bitmapList[id] = { bitmap : bitmap };
    }

    //render one frame on screen
    render = () => {

        this.clearBitmap();

        Object.keys(this.bitmapList).forEach((id) => {

            const element = this.bitmapList[id];

            element.bitmap.forEach((bitmapRow, x) => {
                bitmapRow.forEach((pixel, y) => {
                    if(pixel !== false) {
                        this.drawPixel(y + element.y, x + element.x, pixel);
                    }
                });
            });
        });
    }
}
/**
 * Player logic
 */
class Player{

}
class Game {

    keyPress = { left : false, up : false, down : false, right : false };

    resetKeyboard = () => {
        this.keyPress = { left : false, up : false, down : false, right : false };
    }

    keyboardDetection = () => {
        
        //Key press mapping
        let listener = new window.keypress.Listener();

        listener.counting_combo("left", () => {  this.keyPress.left = true });
        listener.counting_combo("right", () => { this.keyPress.right = true });
        listener.counting_combo("up", () => { this.keyPress.up = true });
        listener.counting_combo("down", () => { this.keyPress.down = true });
        listener.counting_combo("left up", () => { this.keyPress.left = true; this.keyPress.up = true });
        listener.counting_combo("up right", () => { this.keyPress.right = true; this.keyPress.up = true });
    }

    
}
class Canvas{
    
    context = null;
    canvas = null;

    constructor(id){
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');
        this.scale();
    }
    
    scale = () => {
        this.context.scale(2,2);

        this.canvas.width = 720;
        this.canvas.height = 720;

        this.canvas.style.width = "720px";
        this.canvas.style.height = "720px";
    }

    clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
let canvas = new Canvas('game');
let pixel = new Pixel(canvas.context);
let game = new Game();

// Create sprites 

let plataformSprite = new Sprite([
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(71).fill(0),
    Array(71).fill(0),
    Array(71).fill(0),
    Array(71).fill(0),
], ['grey']);

let treeSprite = new Sprite([
    [0, 0, 1, 1, 1, 0],
    [0, 1, 2, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0],
], ['#000', 'green', 'pink']);

let shipSprite = new Sprite([
    [3, 1, 1, 1, 1, 1],
    [0, 1, 0, 2, 0, 1],
    [0, 1, 0, 2, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1],
], [
    '#000',
    'white',
    'blue',
    'grey',
]);

// create elements 
pixel.create('plataform', plataformSprite.get());
pixel.create('ship', shipSprite.get(), 1);

//Start animation
let positions = {
    ship : 63, 
    plataform : 60,
}

//create "trees"
for (let i = 0; i < 20; i++) {
    pixel.create('tree' + i, treeSprite.get());

    const randX = Math.floor(Math.random() * 30) + 1;
    const randY = Math.floor(Math.random() * 30) + 1;

    pixel.move('tree' + i, positions.plataform - randX, randY);
}

game.keyboardDetection();

setInterval(() => {

    console.log(game.keyPress);
    
    game.resetKeyboard();

    pixel.move('plataform', positions.plataform, 0);
    pixel.move('ship', positions.ship, 10);

    positions.plataform++;
    if(positions.ship > 50){
        positions.ship--;
    }

    canvas.clear();
    pixel.render();

}, 100);
