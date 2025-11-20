function insert_Row() {
  // find the table
  var tbl = document.getElementById('sampleTable');
  if (!tbl) return; // safety: nothing to do if table not found

  // insert new row at top (index 0)
  var newRow = tbl.insertRow(0);

  // create two cells and set their text
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  cell1.textContent = 'New Cell1';
  cell2.textContent = 'New Cell2';
}