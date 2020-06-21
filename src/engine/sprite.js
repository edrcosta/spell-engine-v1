class Sprite{

    frames;
    colors;
    show = false;    
    x = 0;
    y = 0;

    constructor(frames, colors, show, x, y){
        this.x = x;
        this.y = y;
        this.show = show;
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