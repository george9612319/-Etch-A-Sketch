
function drawgrid() {
    const grid = document.getElementById('container'); // target the container as grid
    const input = document.getElementById('input'); // target the input
    const gridcount = parseInt(input.value);
    grid.style.gridTemplateColumns = `repeat(${gridcount}, 1fr)`; //gridcount as column and row
    grid.style.gridTemplateRows = `repeat(${gridcount}, 1fr)`;
    const option = select.options[select.selectedIndex].value;

    if (typeof gridcount === 'number' && gridcount < 101) {
        const totalgrid = gridcount*gridcount;
        for(var i=0; i<totalgrid; i++) {
            const gridItem = document.createElement('div'); 
            gridItem.classList.add('grid-item'); // add a <div class = "grid-item"></div>

            gridItem.addEventListener ('mouseover', function(e) {
                if (option === 'black'){
                    e.target.style.backgroundColor = 'black';
                } else if (option === 'gray' ) {
                    e.target.style.backgroundColor = `rgb(224,224,224)`;
                }else if (option === 'RGB') {
                    var R = Math.floor(Math.random()*256);
                    var G = Math.floor(Math.random()*256);
                    var B = Math.floor(Math.random()*256);
                    var randomColor = 'rgb('+R+','+G+','+B+')';
                    e.target.style.backgroundColor = randomColor;
                }
            }
            )
                

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

const resetbutton = document.querySelector('button'); // reset the grid
resetbutton.addEventListener('click',function(e){
    const grid = document.getElementById('container');
    while(grid.firstChild) { // delete the grid
    grid.removeChild(grid.firstChild);
    };
    drawgrid(); // recreate grids
})

const select = document.getElementById('select'); // add three options for choosing the color of grid
    const color = ['black', 'gray', 'RGB'];
    color.forEach(color => {
    const option = document.createElement('option');
    option.text = color;
    select.add(option);
    })