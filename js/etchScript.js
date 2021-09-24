const DEFAULT_COLOR = "black";
const DEFAULT_NUM = 16;
let currentColor = DEFAULT_COLOR;

window.onload = function() {
  let gridSize = DEFAULT_NUM;
  createPixels(gridSize);

  const slideLabel = document.querySelector("#slide-label");
  document.querySelector("#color-selector").style.backgroundColor = DEFAULT_COLOR;
  slideLabel.innerText = `${gridSize} x ${gridSize}`

  addButtonListeners();
  addSliderListener();
}


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
  const container = document.querySelector(".container");
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
        if(currentColor == "rainbow") {
          pixel.style.backgroundColor = randRGB();
        }
        else {
          pixel.style.backgroundColor = currentColor;
        }
      })
    }
    container.appendChild(rowDiv);
  }
}

/**
 * removePixels()
 * Function to clear the canvas.
 */
function removePixels() {
  const container = document.querySelector(".container");
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function randRGB() {
  let rVal = Math.floor(Math.random() * 255);
  let gVal = Math.floor(Math.random() * 255);
  let bVal = Math.floor(Math.random() * 255);

  return `rgb(${rVal},${gVal},${bVal})`;
}

function addButtonListeners() {
  const rainBtn = document.querySelector("#rain-btn");
  const eraseBtn = document.querySelector("#erase-btn");
  const colorBtn = document.querySelector("#color-selector");
  const colorInput = document.querySelector("#color-picker");
  const clearBtn = document.querySelector("#clear-btn");

  rainBtn.addEventListener("click", () => {
    currentColor = "rainbow";
  })

  eraseBtn.addEventListener("click", () => {
    currentColor = "white";
  })

  colorInput.addEventListener("change", () => {
    currentColor = colorInput.value;
    colorBtn.style.backgroundColor = colorInput.value;
  })

  clearBtn.addEventListener("click", () => {
    const slider= document.querySelector('.slider');
    let gridSize = slider.value;
    removePixels();
    createPixels(gridSize);
  })
}


function addSliderListener() {
  const slider= document.querySelector('.slider');
  const slideLabel = document.querySelector("#slide-label");

  slider.addEventListener("mouseup", () => {
    gridSize = slider.value;
    slideLabel.innerText = `${gridSize} x ${gridSize}`
    //remove current grid and redraw with newly selected size
    removePixels();
    createPixels(gridSize);
  })
}