
function drawgrid() {
    const grid = document.getElementById('container'); // target the container as grid
    const input = document.getElementById('input'); // target the input
    const gridcount = parseInt(input.value);
    grid.style.gridTemplateColumns = `repeat(${gridcount}, 1fr)`; //gridcount as column and row
    grid.style.gridTemplateRows = `repeat(${gridcount}, 1fr)`;
    const option = select.options[select.selectedIndex].value;

    if (typeof gridcount === 'number' && gridcount < 101) { // create gud base on the iput number
        const totalgrid = gridcount*gridcount;
        for(var i=0; i<totalgrid; i++) {
            const gridItem = document.createElement('div'); 
            gridItem.classList.add('grid-item'); // add a <div class = "grid-item"></div>

            gridItem.addEventListener ('mouseover', function(e) { // grid will change color when mouseover
                if (option === 'Black'){ // whem option === black, grid show black when mouseover
                    e.target.style.backgroundColor = 'black';
                } else if (option === 'Gray' ) { // whem option === grey, grid show grey when mouseover
                    e.target.style.backgroundColor = `rgb(224,224,224)`;
                }else if (option === 'RGB') { // whem option === RGB, grid show random RGB when mouseover
                    var R = Math.floor(Math.random()*256);
                    var G = Math.floor(Math.random()*256);
                    var B = Math.floor(Math.random()*256);
                    var randomColor = 'rgb('+R+','+G+','+B+')';
                    e.target.style.backgroundColor = randomColor;
                }
            }
            )
                

            gridItem.addEventListener('mouseleave', function(e) { // grid color will back to #ccc when mouse leave
                e.target.style.backgroundColor = '#ccc';
            })

            grid.appendChild(gridItem);// put grid-item in grid(container)

        }
    }
    else {
        return;
    }
};

const resetbutton = document.querySelector('button'); // reset the grid when click button
resetbutton.addEventListener('click',function(e){
    const grid = document.getElementById('container');
    while(grid.firstChild) { // delete the grid
    grid.removeChild(grid.firstChild); 
    };
    drawgrid(); // recreate grids
})

const select = document.getElementById('select'); // add three options for choosing the color of grid
    const color = ['Black', 'Gray', 'RGB'];
    color.forEach(color => {
    const option = document.createElement('option');
    option.text = color;
    select.add(option);
    })
select.addEventListener('change', function(e){ // recreate the grid as change the option of color
    const grid = document.getElementById('container');
    while(grid.firstChild) { // delete the grid
    grid.removeChild(grid.firstChild); 
    };
    drawgrid();
})