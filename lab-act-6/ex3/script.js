function getPosition() {
    const box = document.getElementById("ball");
    const outputDiv = document.getElementById("output");

    const position = box.getBoundingClientRect();

    console.log("Left:", position.left);
    console.log("Top:", position.top);
    
    outputDiv.innerHTML = `
        <div class="coord-group"><strong>Left (x):</strong> ${position.left.toFixed(1)} px</div>
        <div class="coord-group"><strong>Top (y):</strong> ${position.top.toFixed(1)} px</div>
        <div class="coord-group"><strong>Right:</strong> ${position.right.toFixed(1)} px</div>
        <div class="coord-group"><strong>Bottom:</strong> ${position.bottom.toFixed(1)} px</div>
        <div class="coord-group"><strong>Width:</strong> ${position.width.toFixed(1)} px</div>
        <div class="coord-group"><strong>Height:</strong> ${position.height.toFixed(1)} px</div>
    `;
}


const ball = document.getElementById("ball");
const container = document.getElementById("container");


let x = 0;
let y = 0;
let dx = 1; 
let dy = 1; 

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
    getPosition(); 

    requestAnimationFrame(animate);
}

function changeColor() {
    const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#8e44ad'];
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

animate();