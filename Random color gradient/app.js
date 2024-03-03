const container = document.querySelector(".container");
const colorText = document.querySelector(".color-text");
const body = document.body;

const valus = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
];

function getGradient() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function setGradient() {
    const color1 = getGradient();
    const color2 = getGradient();
    const randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;

    body.style.background = bgColor;
    colorText.textContent = bgColor;
}

setGradient();

container.addEventListener("click", setGradient);
