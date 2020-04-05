/**
 * Pixel art bit map tool
 */
class Pixer{

    context;
    pixelSize = 10;

    screenBitMap = [];

    constructor(context){
        this.context = context;
        this.screenBitMap = Array(72).fill(Array(72).fill(0));
    }

    draw = (x, y, color) => {
    
        x = this.pixelSize * x;
        y = this.pixelSize * y;

        this.context.fillStyle = color;
        this.context.fillRect(x, y, this.pixelSize, this.pixelSize);
        this.context.fillRect(x, y, this.pixelSize, this.pixelSize);    
    }

    renderBitmap = () => {
        
        const bitmap = this.screenBitMap;
         
        for (let r = 0; r < bitmap.length; r++) {
            
            const row = bitmap[r];

            for (let c = 0; c < row.length; c++) {
                if(row[c] === 1) this.draw(position.left + c , position.top + r, color);    
            }
        }
    }
    
    sprite(bitmap, position, color){   
        
        console.log(position);
        bitmap.forEach(row => {
            
            row.forEach()

        });
        // for (let i = 0; i < 72; i++) {
            
        //     this.draw(i, i, 'red');
            
        // }
  
    }
}