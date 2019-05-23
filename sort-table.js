const grid = document.querySelector('#grid');

grid.addEventListener('click', (event)=>{
  if (event.target.tagName != 'TH') return;
  sortGrid(event.target.cellIndex, event.target.getAttribute('data-type'));
});

function complexCompare(colNum, type) {
  switch (type) {
    case 'number':
      return function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      return function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML.localeCompare(rowB.cells[colNum].innerHTML);
      };
      break;
  }
  return undefined;
}

function sortGrid(colNum, type) {
  let tbody = grid.getElementsByTagName('tbody')[0];
  let rowsArray = Array.prototype.slice.call(tbody.rows);
  const compare = complexCompare(colNum, type);
  rowsArray.sort(compare);
  rowsArray.forEach((row) => {
    tbody.appendChild(row);
  });
}
