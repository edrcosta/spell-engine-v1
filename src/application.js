let canvas = new Canvas('game');
let pixel = new Pixel(canvas.context);

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
]);
plataformSprite.addColorPallet(['grey']);

let treeSprite = new Sprite([
    [0, 0, 1, 1, 1, 0],
    [0, 1, 2, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0],
]);

treeSprite.addColorPallet(['#000', 'green', 'pink']);

let shipSprite = new Sprite([
    [3, 1, 1, 1, 1, 1],
    [0, 1, 0, 2, 0, 1],
    [0, 1, 0, 2, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1],
]);

shipSprite.addColorPallet([
    '#000',
    'white',
    'blue',
    'grey',
]);

pixel.createElement('plataform', plataformSprite.get());
pixel.createElement('ship', shipSprite.get(), 1);

let positions = {
    ship : 63, 
    plataform : 60,
}


for (let i = 0; i < 20; i++) {
    pixel.createElement('tree' + i, treeSprite.get());

    const randX = Math.floor(Math.random() * 30) + 1;
    const randY = Math.floor(Math.random() * 30) + 1;

    pixel.moveElement('tree' + i, positions.plataform - randX, randY);
}
setInterval(() => {
    
    
    pixel.moveElement('plataform', positions.plataform, 0);
    pixel.moveElement('ship', positions.ship, 10);

    positions.plataform++;
    if(positions.ship > 50){
        positions.ship--;
    }

    canvas.clear();
    pixel.render();

}, 100);
