const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const thicknessSlider = document.getElementById('thicknessSlider');
const clearButton = document.getElementById('clearButton');

let drawing = false;
let lastX = 0;
let lastY = 0;

canvas.width = 400;
canvas.height = 400;
context.lineWidth = 2;
context.lineCap = 'round';
context.strokeStyle = '#000000';

colorPicker.addEventListener('input', () => {
    context.strokeStyle = colorPicker.value;
});

thicknessSlider.addEventListener('input', () => {
    context.lineWidth = thicknessSlider.value;
});

clearButton.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

canvas.addEventListener('mouseout', () => {
    drawing = false;
});

function draw(e) {
    if (!drawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
