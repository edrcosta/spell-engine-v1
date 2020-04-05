/**
 * Player logic
 */
class Player{

    position = {
        top : 0, 
        left : 0
    };

    keyPress = {
        left : false,
        right : false, 
        up: false, 
        down : false,
        space : false
    };

    sprite = [
        [
            [0, 1, 0,] ,
            [1, 1, 1,] ,
            [1, 0, 1,],
            [1, 1, 1,]
        ],
    ];
    
    constructor(){
        this.animation();
    }

    spriteStep = 0;
    resetControls = () => {
        Object.keys(this.keyPress).forEach((key) => { this.keyPress[key] = false });
    }

    verticalMomentum = 5;

    positionUpdate = () => {
        if(this.keyPress.up) {
            this.position.top = 20;
        };
        
        if(this.keyPress.down) {
            this.position.top++;
        }

        if(this.keyPress.left || this.keyPress.right){
            if(this.keyPress.left) this.position.left-= this.verticalMomentum;
            if(this.keyPress.right) this.position.left += this.verticalMomentum;
        }
    };

    gravity = () => {

        const ground = 50;
        
        if(this.position.top < ground){
            const newPos = this.position.top + (this.position.top / 5) + 0.01;
            this.position.top =  newPos > ground ? ground :  newPos;   
        }
    };

    animation = () => {
        setInterval(() => {
            if(this.spriteStep === (this.sprite.length - 1)){
                this.spriteStep = 0;
            }else{
                this.spriteStep++;            
            }
        }, 1000, this.spriteStep);
    }

    render = (engine) => {1
        engine.sprite(this.sprite[this.spriteStep],this.position,  '#fff');
    }
}