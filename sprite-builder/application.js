let draw = document.getElementById('draw-area');

const colsNum = 100;
const rowsNum = 30;

let grid = [];

for (let i = 0; i < rowsNum; i++) {
    
    let div = Array(colsNum).fill('<div class="pixel"></div>');

    div = `<div class="row">${div.join('')}</div>`;

    grid.push(div);
}

draw.innerHTML = grid.join('');

let pixelsDivs = document.getElementsByClassName('pixel');

for (let i = 0; i < pixelsDivs.length; i++) {
    pixelsDivs[i].onclick = () =>{
        pixelsDivs[i].style.background = document.getElementById('color-input').value;
    }
}

document.getElementById('import-data').onclick = () => {
    
    let pixelsDivs = document.getElementsByClassName('pixel');
    let rowsDivs = document.getElementsByClassName('row');

    for (let r = 0; r < rowsDivs.length; r++) {
        const row = rowsDivs[r];

        for (let c = 0; c < pixelsDivs.length; c++) {
            const pixel = pixelsDivs[c];
            
            console.log(pixel.style.background);
        }
    }
}
