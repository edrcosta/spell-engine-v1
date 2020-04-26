let rawSprite = {};

const rand = () => Math.floor(Math.random() * 2) + 0 ;

worldLine = [];
for (let i = 0; i < 1000; i++) {
    worldLine.push(rand());    
}

rawSprite.plataform = [
    worldLine,
    worldLine,
    worldLine,
    worldLine,
    worldLine,
    Array(1000).fill(0),
    Array(1000).fill(0),
    Array(1000).fill(0),
];

rawSprite.plataformColors = ['grey', 'transparent'];

rawSprite.ship = [
    [2, 0, 2, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1],
    [3, 1, 1, 1, 0, 0, 4, 4, 4, 4, 1, 1],
    [3, 1, 1, 1, 1, 1, 0, 4, 4, 0, 1, 1],
    [3, 1, 1, 1, 1, 1, 1, 0, 4, 4, 1, 1],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

rawSprite.shipColors = [ '#000', '#0a425e', 'transparent', 'red', 'blue' ];