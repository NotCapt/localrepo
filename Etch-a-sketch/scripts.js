const container = document.querySelector('#container');

for (let i = 0; i <= 255; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('square');
    container.appendChild(gridItem);
}

const square = document.querySelector('.square');

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'black';
    }
});

const button = document.querySelector('button');

button.addEventListener('click', () => {
    let usrinpt = parseInt(prompt('enter the number of squares (less than 100)'));
    container.innerHTML = '';
    for (let i = 0; i <usrinpt*usrinpt; i++){
        const newsquare = document.createElement('div');
        newsquare.classList.add('square');
        const squareSize = 400 / usrinpt;
        newsquare.style.width = squareSize + 'px';
        newsquare.style.height = squareSize + 'px';
        container.appendChild(newsquare);

    }
});

