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
    get = (userframeViewXSize, userframeViewYSize, frameStep) =>{
        return this.frames[frameStep].map((row) => row.map((pixel) => this.colors[pixel]));
    }
}