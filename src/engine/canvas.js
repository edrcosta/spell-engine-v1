/**
 * Interact with canvas 
 */
class Canvas{
    
    context = null;
    canvas = null;

    constructor(context, canvas){
        this.context = context;
        this.canvas = canvas;
        this.scale();
    }
    
    //scaling the canvas to keep a decent resolution
    scale = () => {
        this.context.scale(2,2);

        //set a fix size 
        this.canvas.width = 720;
        this.canvas.height = 720;
        this.canvas.style.width = "720px";
        this.canvas.style.height = "720px";
    }

    clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}