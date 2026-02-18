// Function to calculate and display position
function getPosition() {
    // 1. Select the elements
    const box = document.getElementById("box");
    const outputDiv = document.getElementById("output");

    // 2. Get the position data relative to the viewport
    const position = box.getBoundingClientRect();

    // 3. Log raw data to Console
    console.log("Left:", position.left);
    console.log("Top:", position.top);
    
    // 4. Update the HTML with the values
    // Using .toFixed(1) for cleaner numbers
    outputDiv.innerHTML = `
        <div class="coord-group"><strong>Left (x):</strong> ${position.left.toFixed(1)} px</div>
        <div class="coord-group"><strong>Top (y):</strong> ${position.top.toFixed(1)} px</div>
        <div class="coord-group"><strong>Right:</strong> ${position.right.toFixed(1)} px</div>
        <div class="coord-group"><strong>Bottom:</strong> ${position.bottom.toFixed(1)} px</div>
        <div class="coord-group"><strong>Width:</strong> ${position.width.toFixed(1)} px</div>
        <div class="coord-group"><strong>Height:</strong> ${position.height.toFixed(1)} px</div>
    `;
}

// Attach the event listener to the button
// We wait for the DOM content to load to be safe, though placing the script
// at the bottom of the body usually handles this automatically.
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("measureBtn");
    if (btn) {
        btn.addEventListener("click", getPosition);
    }
});