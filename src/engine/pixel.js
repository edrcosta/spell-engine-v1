class Pixel{

    context;
    pixelSize = 10;
    bitmapList =  {};
    bitmap = [];
    emptyBitmap = [];

    constructor(context){
        this.context = context;        
        this.initBitmap();
    }

    initBitmap = () => {
        
        let newEmptyBitmap = [];

        for (let i = 0; i <= 71; i++) {
            newEmptyBitmap.push(Array(71).fill(false));            
        }

        this.emptyBitmap = newEmptyBitmap;
        this.bitmap = newEmptyBitmap;
    }

    clearBitmap = () => {
        let empty = this.emptyBitmap;
        this.bitmap = empty;
    }

    drawPixel = (x, y, color) => {
        
        x = this.pixelSize * x;
        y = this.pixelSize * y;

        this.context.fillStyle = color;

        this.context.fillRect(x, y, this.pixelSize, this.pixelSize);
        this.context.fillRect(x, y, this.pixelSize, this.pixelSize);    
    }
    
    moveElement = (id, x, y) => {
        this.bitmapList[id].x = x;
        this.bitmapList[id].y = y;
    }

    createElement = (id, bitmap) => {
        this.bitmapList[id] = { bitmap : bitmap, x : 0, y : 0 };
    }

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