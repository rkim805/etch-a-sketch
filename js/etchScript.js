let container = document.querySelector(".container");
createPixels(16);


function createPixels(gridSize) {
  for(let i = 0; i < gridSize; i++) {
    let columnDiv = document.createElement("div");
    columnDiv.classList.add("row-container", `row${i}`);
    for(let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.id = `pixel${i+ '-' + j}`;
      columnDiv.appendChild(pixel);
    }
    container.appendChild(columnDiv);
  }
}