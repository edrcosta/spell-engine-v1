class Sprite{

    frames;
    colors;
    
    constructor(frames, colors){
        this.frames = frames;   
        this.colors = colors;
    }

    /**
     * replace bitmap color index by respective css color code in colors array
     */
    get = (x, y, frameNumber) =>{
        return this.frames[frameNumber].map((row) => row.map((pixel) => this.colors[pixel]));
    }
}