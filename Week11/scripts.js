// Select the button using its ID
const rotateBtn = document.getElementById("rotateBtn");

// Keep track of the current rotation
let rotation = 0;

// Add a click event listener to the button
rotateBtn.addEventListener("click", function() {

    // Increase rotation by 360 degrees
    rotation += 360;

    // Rotate the entire webpage
    document.body.style.transform = `rotate(${rotation}deg)`;

});

//Double Click Event 
const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", () => {
dblBtn.textContent = "Double-clicked!";
});








const button = document.getElementById("myButton");
const resetButton = document.getElementById("resetButton");

// 1. Grab the original background color right when the page loads
const originalColor = window.getComputedStyle(document.body).backgroundColor;

// 2. Your original code (simplified so it can run infinitely)
button.addEventListener("click", () => {
  const colors = "#9c4646";
  document.body.style.backgroundColor = colors;
});

// 3. The Reset Code (just resets the color, doesn't kill the button)
resetButton.addEventListener("click", () => {
  document.body.style.backgroundColor = originalColor;
});

