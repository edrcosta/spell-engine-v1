let canvas = new Canvas('game');
let pixel = new Pixel(canvas.context);
let game = new Game();

// Create sprites 

let plataformSprite = new Sprite([
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(20).fill(0),
    Array(71).fill(0),
    Array(71).fill(0),
    Array(71).fill(0),
    Array(71).fill(0),
], ['grey']);

let treeSprite = new Sprite([
    [0, 0, 1, 1, 1, 0],
    [0, 1, 2, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0],
], ['#000', 'green', 'pink']);

let shipSprite = new Sprite([
    [3, 1, 1, 1, 1, 1],
    [0, 1, 0, 2, 0, 1],
    [0, 1, 0, 2, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1],
], [
    '#000',
    'white',
    'blue',
    'grey',
]);

// create elements 
pixel.create('plataform', plataformSprite.get());
pixel.create('ship', shipSprite.get(), 1);

//Start animation
let positions = {
    ship : 63, 
    plataform : 60,
}

//create "trees"
for (let i = 0; i < 20; i++) {
    pixel.create('tree' + i, treeSprite.get());

    const randX = Math.floor(Math.random() * 30) + 1;
    const randY = Math.floor(Math.random() * 30) + 1;

    pixel.move('tree' + i, positions.plataform - randX, randY);
}

game.keyboardDetection();

setInterval(() => {

    console.log(game.keyPress);
    
    game.resetKeyboard();

    pixel.move('plataform', positions.plataform, 0);
    pixel.move('ship', positions.ship, 10);

    positions.plataform++;
    if(positions.ship > 50){
        positions.ship--;
    }

    canvas.clear();
    pixel.render();

}, 100);
