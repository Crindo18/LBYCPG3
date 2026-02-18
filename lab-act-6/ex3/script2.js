const ball = document.getElementById("ball");
const container = document.getElementById("container");


let x = 0;
let y = 0;
let dx = 4; 
let dy = 4; 

function animate() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const ballSize = ball.offsetWidth;

    if (x + ballSize >= containerWidth || x < 0) {
        dx = -dx; 
        changeColor();
    }

    if (y + ballSize >= containerHeight || y < 0) {
        dy = -dy; 
        changeColor();
    }

    x += dx;
    y += dy;
    ball.style.left = x + "px";
    ball.style.top = y + "px";

    requestAnimationFrame(animate);
}

function changeColor() {
    const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#8e44ad'];
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

animate();