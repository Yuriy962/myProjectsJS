const board = document.querySelector('#board');
const colors = ['#eb3453', '#34c3eb', '#52eb34', '#e8eb34', '#8634eb', '#4034eb', '#eb3493', '#96eb34'];
const SQUARES_NUMBER = 500;
const audioEffects = [
    '/audio/bass.mp3'
];

// Отрисовка доски
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index];
}