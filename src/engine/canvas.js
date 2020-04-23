class Canvas{
    
    context = null;
    canvas = null;

    constructor(id){
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');
        this.scale();
    }
    
    scale = () => {
        this.context.scale(2,2);

        this.canvas.width = 720;
        this.canvas.height = 720;

        this.canvas.style.width = "720px";
        this.canvas.style.height = "720px";
    }

    clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}