class Sprite{

    bitmap;
    colors;
    
    constructor(bitmap, colors){
        this.bitmap = bitmap;
        this.colors = colors;
    }

    /**
     * replace bitmap color index by respective css color code in colors array
     */
    get = () => this.bitmap.map((row) => row.map((pixel) => this.colors[pixel]));
}