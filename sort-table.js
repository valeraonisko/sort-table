const grid = document.querySelector('#grid');

grid.addEventListener('click', (event)=>{
  if (event.target.tagName != 'TH') return;
  sortGrid(event.target.cellIndex, event.target.getAttribute('data-type'));
});

function complexCompare(colNum, type) {
  switch (type) {
    case 'number':
      return function(rowA, rowB) {
        return Number(rowA.cells[colNum].textContent) - Number(rowB.cells[colNum].textContent);
      };
      break;
    case 'string':
      return function(rowA, rowB) {
        return rowA.cells[colNum].textContent.localeCompare(rowB.cells[colNum].textContent);
      };
      break;
  }
  return undefined;
}

function sortGrid(colNum, type) {
  const tbody = grid.getElementsByTagName('tbody')[0];
  const rowsArray = Array.prototype.slice.call(tbody.rows);
  const compare = complexCompare(colNum, type);

  rowsArray.sort(compare);
  rowsArray.forEach((row) => {
    tbody.appendChild(row);
  });
}
