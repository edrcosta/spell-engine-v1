class Game {
    
    gameLoopCallback;
    gameLoopCount = 0;
    canvas;
    pixel;
    halt = false;
    clockSpeed = 100;
    keyPress = { left : false, up : false, down : false, right : false };

    constructor(canvas, pixel){
        this.canvas = canvas;
        this.pixel = pixel;
    }

    //reset keypress values    
    resetKeyboard = () => {
        this.keyPress = { left : false, up : false, down : false, right : false };
    }

    //start multi key keypress detection 
    keyboardDetection = () => {

        // multiple keboard detection in JS is harder than looks so.. 
        let listener = new window.keypress.Listener();

        listener.counting_combo("left", () => {  this.keyPress.left = true });
        listener.counting_combo("right", () => { this.keyPress.right = true });
        listener.counting_combo("up", () => { this.keyPress.up = true });
        listener.counting_combo("down", () => { this.keyPress.down = true });
        //event the library has problens with the "diagonal"
        listener.counting_combo("left up", () => { this.keyPress.left = true; this.keyPress.up = true });
        listener.counting_combo("up right", () => { this.keyPress.right = true; this.keyPress.up = true });
    }

    //set a game loop callback
    setGameLoop = (callback) => {
        this.gameLoopCallback = callback;
    }

    loopStart = () => {
        
        this.keyboardDetection();
 
        this.gameLoop = setInterval((game) => {

            if(!game.halt){                
                game.gameLoopCallback();
                game.resetKeyboard();
                game.canvas.clear();
                game.pixel.render();
                game.gameLoopCount++;
            }

        }, this.clockSpeed, this);
    }

    pause = () => { this.halt = true }

    start = () => { this.halt = false }
}