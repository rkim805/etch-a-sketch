const container = document.querySelector(".container");
const sliderContainer = document.querySelector("#slider-container");
const slider= document.querySelector('.slider');
const slideLabel = document.querySelector("#slide-label");


let gridSize = 16;
createPixels(gridSize);
slideLabel.innerText = `${gridSize} x ${gridSize}`


//redraw grid when different size chosen
slider.addEventListener("mouseup", () => {
  gridSize = slider.value;
  slideLabel.innerText = `${gridSize} x ${gridSize}`
  removePixels();
  createPixels(gridSize);
})



/**
 * createPixels(gridSize)
 * 
 * Creates a number of divs with gridSize rows and gridSize columns.
 * Each div will represent a pixel that will change color after mousing
 * over said pixel.
 * 
 * @param {number} gridSize -- creates gridSize x gridSize number of pixels
 */
function createPixels(gridSize) {
  for(let i = 0; i < gridSize; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row-container", `row${i}`);

    //calculate height of each row based on container's height.
    rowDiv.style.height = `${container.clientHeight/gridSize}px`

    for(let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");

      //calculate width of each pixel based on container's width.
      pixel.style.width = `${container.clientWidth/gridSize}px`
      rowDiv.appendChild(pixel);

      pixel.addEventListener("mouseover", () => {
        pixel.classList.add("lit-up");
      })
    }
    container.appendChild(rowDiv);
  }
}

/**
 * removePixels()
 * Function to remove divs from container when clearing/resizing the canvas.
 */
function removePixels() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}