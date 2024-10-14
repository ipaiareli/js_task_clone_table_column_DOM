'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const secondCell = rows[i].cells[1];
  const clonedCell = secondCell.cloneNode(true);

  rows[i].insertBefore(clonedCell, rows[i].cells[rows[i].cells.length - 1]);
}
