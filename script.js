function makeGrid (size, grid, colour) {
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    for (let i = 0; i <= size * size; i++) {
        const box = document.createElement('box');
        box.classList.add('box');
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = colour.value
        });
        grid.appendChild(box);
    };   
};

function clearGrid(grid) {
    while (grid.lastChild) {
        grid.removeChild(grid.lastChild);
    };
};

function inputRangeLogic() {

};

function main () {
    const colour = document.querySelector('input');
    const grid = document.querySelector('.grid');
    const sliderValue = document.querySelector('.slider-value');
    const inputRange = document.querySelector('#grid-size');
    const resetBtn = document.querySelector('#reset');
    
    makeGrid(32,grid,colour);
    
    resetBtn.addEventListener('click', () => {
        clearGrid(grid);
        makeGrid(Number(inputRange.value),grid,colour);
    });
    
    sliderValue.textContent = inputRange.value;
    inputRange.addEventListener('change', () => {
        sliderValue.textContent = inputRange.value;
        clearGrid(grid)
        makeGrid(Number(inputRange.value),grid, colour)
    });
};


main();