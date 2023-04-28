//document.addEventListener("DOMContentLoaded",drawgrid);

function drawgrid() {
    const grid = document.getElementById('container'); // target the container as grid
    const input = document.getElementById('input'); // target the input
    const gridcount = parseInt(input.value);
    grid.style.gridTemplateColumns = `repeat(${gridcount}, 1fr)`; //gridcount as column and row
    grid.style.gridTemplateRows = `repeat(${gridcount}, 1fr)`;

    if (typeof gridcount === 'number' && gridcount < 49) {
        const totalgrid = gridcount*gridcount;
        for(var i=0; i<totalgrid; i++) {
            const gridItem = document.createElement('div'); 
            gridItem.classList.add('grid-item'); // add a <div class = "grid-item"></div>

            const innerdiv = document.createElement('div');
            gridItem.appendChild(innerdiv);// add <div></div> in grid-item

            gridItem.addEventListener ('mouseover', function(e) {
                e.target.style.backgroundColor = 'black';
            });

            gridItem.addEventListener('mouseleave', function(e) {
                e.target.style.backgroundColor = '#ccc';
            })

            grid.appendChild(gridItem);// put grid-item in grid(container)

        }
    }
    else {
        return;
    }
};

const resetbutton = document.querySelector('button');
resetbutton.addEventListener('click',function(e){
    const grid = document.getElementById('container');
    while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
    };
    drawgrid();

})




