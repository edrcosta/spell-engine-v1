class Sprite{

    bitmap;
    colors;
    
    constructor(bitmap, colors){
        this.bitmap = bitmap;
        this.colors = colors;
    }

    get = () => this.bitmap.map((row) => row.map((pixel) => this.colors[pixel]));
}