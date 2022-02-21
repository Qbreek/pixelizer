const gridContainer = document.querySelector('#grid-container');
const colour = document.querySelector('input');

for (let i = 0; i <= 6; i++) {
    for (let i = 0; i <6; i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = colour.value
        })
        gridContainer.appendChild(div);
    }
}