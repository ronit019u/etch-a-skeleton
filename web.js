const container= document.querySelector('container');
const grids () => {
for(let i = 1; i <=16; i++) {
    const row = document.createElement('div');
    row.classList.add('grid_row');
    for(let j = 1; j <=16; j++) {
      const column = document.createElement('div');
      column.classList.add('column_grid');
      row.appendChild(column);
    }
    row.appendChild(container);
 }
}