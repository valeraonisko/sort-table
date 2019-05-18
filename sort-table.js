const grid = document.getElementById('grid');

grid.onclick = function(e) {
  if (e.target.tagName != 'TH') return;
  sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
  };

function sortGrid(colNum, type) {
  let tbody = grid.getElementsByTagName('tbody')[0];
  let rowsArray = [].slice.call(tbody.rows);
  let compare;
  switch (type) {
    case 'number':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function(rowA, rowB) {
        if (rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML) return 1;
        if (rowA.cells[colNum].innerHTML < rowB.cells[colNum].innerHTML) return -1;
        return 0;
      };
      break;
  }

rowsArray.sort(compare);
  for (var i = 0; i < rowsArray.length; i++) {
    tbody.appendChild(rowsArray[i]);
  }
}
