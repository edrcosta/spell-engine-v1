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