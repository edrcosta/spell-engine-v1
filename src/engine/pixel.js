class Pixel{

    context;
    pixelSize = 10;
    bitmapList =  {};
    backgrounColor = '#000';

    constructor(context){
        this.context = context;
        
        this.clearBitmap();
    }

    clearBitmap = () => {
        this.bitmap = [];

        for (let i = 0; i <= 71; i++) {
            this.bitmap.push(Array(71).fill(this.backgrounColor));            
        }
    }

    drawPixel = (x, y, color) => {
        
        x = this.pixelSize * x;
        y = this.pixelSize * y;

        this.context.fillStyle = color;

        this.context.fillRect(x, y, this.pixelSize, this.pixelSize);
        this.context.fillRect(x, y, this.pixelSize, this.pixelSize);    
    }
    
    createElement = (id, bitmap, x, y) => {
        this.bitmapList[id] = { bitmap : bitmap, x : x, y : y };
    }

    mergeBitmapLayers = () => {
        Object.keys(this.bitmapList).forEach((id) => {

            const element = this.bitmapList[id];

            element.bitmap.forEach((row, x) => {
                row.forEach((pixelVal, y) => {
                    this.bitmap[x + element.x][y + element.y] = pixelVal;
                });
            });
        });
    }

    render = () => {

        this.clearBitmap();
        this.mergeBitmapLayers();

        this.bitmap.forEach((row, x) => {
            row.forEach((pixel, y) => {
                if(pixel) this.drawPixel(y, x, pixel);
            });
        });
    }
}