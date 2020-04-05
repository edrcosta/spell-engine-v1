class Game {

    canvas = null;

    constructor(context, canvas){
        this.canvas = new Canvas(context, canvas);
    }
    
    renderLoop = () => {
        // player.gravity();
    }

    informationLoop = () => {
        // sprites.ground(pixel);
        // player.render(pixel);
    }

    controlLoop = () => {
        // player.resetControls();
        // player.positionUpdate();
    }

    start = (level) => {
        this.startKeyboardDetection();
    }

    startKeyboardDetection = () => {
        
        //Key press mapping
        let listener = new window.keypress.Listener();

        listener.counting_combo("left", () => {  player.keyPress.left = true });
        listener.counting_combo("right", () => { player.keyPress.right = true });
        listener.counting_combo("up", () => { player.keyPress.up = true });
        listener.counting_combo("down", () => { player.keyPress.down = true });
        listener.counting_combo("left up", () => { player.keyPress.left = true; player.keyPress.up = true });
        listener.counting_combo("up right", () => { player.keyPress.right = true; player.keyPress.up = true });
    }
}