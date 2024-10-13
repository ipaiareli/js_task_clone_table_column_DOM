'use strict';

const tableHead = document.querySelector('thead');
const cloneTableHead = tableHead.cloneNode(true);
const tableFoot = document.querySelector('tfoot');
const cloneTableFoot = tableFoot.cloneNode(true);
const headPosition = cloneTableHead.querySelector('tr :nth-child(2)');
const footPosition = cloneTableFoot.querySelector('tr :nth-child(2)');
const headSalary = tableHead.querySelector('tr :nth-child(5)');
const footSalary = tableFoot.querySelector('tr :nth-child(5)');
const tableBody = document.querySelectorAll('tbody tr');

headSalary.before(headPosition);
footSalary.before(footPosition);

tableBody.forEach((tr, index) => {
  const secondChild = tr.querySelector(':nth-child(2)');
  const fifthChild = tr.querySelector(':nth-child(5)');

  fifthChild.before(secondChild.cloneNode(true));
});
