
let canvas = new Canvas('game');
let pixel = new Pixel(canvas.context);

let counter = 0;
setInterval(() => {
    
    pixel.createElement('teste1', [
        Array(71).fill(1),
    ], 68, 0);


    pixel.createElement('teste1', [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
    ], 63, counter);

    counter++;
    canvas.clear();
    pixel.render();

}, 1000);



