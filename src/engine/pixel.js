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
    
    //this will move the user 'screen area' 
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
                colors : spriteList[key].colors,
                frames : spriteList[key].frames,
                object : new Sprite(spriteList[key].frames, spriteList[key].colors)
            };
        });

        this.spriteList = spriteListById;
    }
    
    //run by an array of arrays and apply a calback on each value 
    runByArrayOfArrays = (arr, callback) => {
        arr.forEach((row, x) => {
            row.forEach((value, y) => { callback(x, y, value) });
        });
    }
    
    isOnUserView = (x, y) => {
        // const isOnUserView = typeof this.bitmap[x][y] !== 'undefined';
        return true;
    }

    renderSprite = (spriteId) => {

        const sprite = this.spriteList[spriteId];

        this.runByArrayOfArrays(sprite.object.get(0,0, 0), (x, y, pixelValue) => {
            if(pixelValue !== false && this.isOnUserView(x, y)) {
                this.drawPixel(y + sprite.y, x + sprite.x, pixelValue);
            }
        });
    }
    
    cloneSprite = (id, x, y) => {

        let cloneCount = Object.keys(this.spriteList).length + 1;

        this.spriteList[`id-${cloneCount}`] = {
            x : y,
            y : x,
            object : new Sprite(this.spriteList[id].frames, this.spriteList[id].colors)
        };

        return `id-${cloneCount}`;
    }

    render = () => {
    
        this.clearBitmap();
        
        Object.keys(this.spriteList).forEach((key) => {
            this.renderSprite(key);
        });
    }
}