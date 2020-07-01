let draw = document.getElementById('draw-area');

const colsNum = 20;
const rowsNum = 20;

let grid = [];

for (let i = 0; i < rowsNum; i++) {
    
    let div = Array(colsNum).fill('<div class="pixel"></div>');

    div = `<div class="row">${div.join('')}</div>`;

    grid.push(div);
    
}



draw.innerHTML = grid.join('');