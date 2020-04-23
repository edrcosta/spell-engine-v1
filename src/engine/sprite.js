class Sprite{

    bitmap;
    colors;
    
    constructor(bitmap){
        this.bitmap = bitmap;
    }

    addColorPallet(colors){
        this.colors = colors;
    }

    get = () => this.bitmap.map((row) => row.map((pixel) => this.colors[pixel]));
}