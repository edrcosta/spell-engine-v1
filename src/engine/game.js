class Game {

    keyPress = { left : false, up : false, down : false, right : false };

    resetKeyboard = () => {
        this.keyPress = { left : false, up : false, down : false, right : false };
    }

    keyboardDetection = () => {
        
        //Key press mapping
        let listener = new window.keypress.Listener();

        listener.counting_combo("left", () => {  this.keyPress.left = true });
        listener.counting_combo("right", () => { this.keyPress.right = true });
        listener.counting_combo("up", () => { this.keyPress.up = true });
        listener.counting_combo("down", () => { this.keyPress.down = true });
        listener.counting_combo("left up", () => { this.keyPress.left = true; this.keyPress.up = true });
        listener.counting_combo("up right", () => { this.keyPress.right = true; this.keyPress.up = true });
    }

    
}