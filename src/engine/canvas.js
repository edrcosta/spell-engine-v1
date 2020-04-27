class Canvas{
    
    context;
    canvas;
    screenSize;

    constructor(id, width, height){

        //js optional parameter ternary oh god i even need this yet?
        width = typeof width !== 'undefined' ? width : 800;
        height = typeof height !== 'undefined' ? height : 800;

        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');

        this.screenSize = { width : width, height : height };

        this.scale();
    }
    
    //set canvas screen size
    scale = () => {
        //prevent blurry pixels
        this.context.scale(2,2);

        this.canvas.width = this.screenSize.width;
        this.canvas.height = this.screenSize.height;        
        this.canvas.style.width = this.screenSize.width + "px";
        this.canvas.style.height = this.screenSize.height + "px";
    }

    //clear all data
    clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}