// Step 1: Find the elements we want to work with
// We use getElementById to "grab" elements from the HTML
const button = document.getElementById("myButton");
const messageBox = document.getElementById("messageBox");
const clickCount = document.getElementById("clickCount");

// Step 2: Create a variable to keep track of clicks
let count = 0;

// Step 3: Add an event listener to the button
// This tells the browser: "When the button is clicked, run this function"
button.addEventListener("click", function (event) {
   
  const wrapperRect = button.parentElement.getBoundingClientRect();
  const x = event.clientX - wrapperRect.left;
  const y = event.clientY - wrapperRect.top;  
  
  createFloatingNumber(x, y);
  
  // Increase the click counter by 1
  count = count + 1;

  // Update the number shown on the page
  clickCount.textContent = count;

  // Toggle the "active" class on the button
  // This changes the button's color (see CSS above)
  button.classList.toggle("active");

  // Toggle the "show" class on the message box
  // This makes the message box appear or disappear (see CSS above)
  messageBox.classList.toggle("show");

  // Change the button text based on whether message is showing
  if (messageBox.classList.contains("show")) {
    button.textContent = "Hide Message";
  } else {
    button.textContent = "Click Me!";
  }
});
function createFloatingNumber(x, y) {
  const floatingNum = document.createElement("span");
  floatingNum.textContent = "+1";
  floatingNum.classList.add("floating-number");
  
  floatingNum.style.left = x + "px";
  floatingNum.style.top = y + "px";
  
  button.parentElement.appendChild(floatingNum);
  
  setTimeout(() => {
    floatingNum.remove();
  }, 1000);
}
// This message appears in the browser console (F12)
console.log("JavaScript is connected and ready!");