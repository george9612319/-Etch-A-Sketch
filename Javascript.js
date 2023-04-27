document.addEventListener("DOMContentLoaded",drawgrid)

function drawgrid() {
    const grid = document.getElementById('container'); // target the container

    for(var i=0; i<256; i++) {
        const gridItem = document.createElement('div'); 
        gridItem.classList.add('grid-item'); // add a <div class = "grid-item"></div>

        const innerdiv = document.createElement('div');
        gridItem.appendChild(innerDiv);

        grid.appendChild(gridItem);
    }
}