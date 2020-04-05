//get elements
let canvas =  document.getElementById('game')
let context = canvas.getContext('2d');


//instant our classes 
let player = new Player();
let pixel = new Pixer(context);
let game = new Game(context, canvas);




//configure level 1 
let level1 = new Level();

level1.render = () => {

    sprites.ground
    console.log('start level 1')
}




game.start(level1);

//Update player controls
setInterval(() => game.controlLoop(), 200);
//Update screen
setInterval(() => game.renderLoop(), 50);
//update other data
setInterval(() => game.informationLoop(), 800);