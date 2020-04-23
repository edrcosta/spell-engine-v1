class Pixel{

    context;
    pixelSize = 10;
    renderClockCount = 0;
    bitmapList =  {};

    constructor(context){
        this.context = context;
        
        this.clearBitmap();
    }

    clearBitmap = () => {
        this.bitmap = [];

        for (let i = 0; i <= 71; i++) {
            this.bitmap.push(Array(71).fill(false));            
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

    sumBitmapLayers = () => {
        Object.keys(this.bitmapList).forEach((id) => {

            const element = this.bitmapList[id];

            element.bitmap.forEach((row, x) => {
                row.forEach((col, y) => {
                    this.bitmap[x + element.x][y + element.y] = col;
                });
            });
        });
    }

    render = () => {
        this.clearBitmap();

        this.sumBitmapLayers();

        this.bitmap.forEach((row, x) => {
            row.forEach((pixel, y) => {
                if(pixel) this.drawPixel(y, x, '#fff');
            });
        });
    }
}