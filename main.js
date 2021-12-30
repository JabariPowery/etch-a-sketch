const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

let d = document.getElementsByClassName("grid-item");
Object.keys(d).forEach(a=>{
  d[a].addEventListener("mouseover", function(e) {
    e.target.style.background = "blue";
  })
})

