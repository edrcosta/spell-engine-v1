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