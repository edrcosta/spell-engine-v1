
let canvas = new Canvas('game');
let pixel = new Pixel(canvas.context);

let counter = 0;
setInterval(() => {
    
    pixel.createElement('test2', [
        Array(71).fill(1),
    ], 68, 0);

    let sprite = new Sprite([
        [1, 1, 2, 2, 2],
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 2],
    ]);

    sprite.addColorPallet([
        'red',
        'green',
        'white',
    ]);

    pixel.createElement('teste1', sprite.get(), 63, counter);

    counter++;
    canvas.clear();
    pixel.render();

}, 1000);



