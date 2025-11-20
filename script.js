function insert_Row() {
  var tbl = document.getElementById('sampleTable');
  if (!tbl) return;

  // ensure we target the tbody (browsers usually auto-create it)
  var body = tbl.tBodies && tbl.tBodies[0] ? tbl.tBodies[0] : tbl;

  // insert row at top of tbody
  var newRow = body.insertRow(0);

  // create two plain cells
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  // set plain text (no HTML) and avoid hidden characters
  cell1.textContent = 'New Cell1';
  cell2.textContent = 'New Cell2';

  // merge adjacent text nodes (clean up any stray whitespace)
  if (tbl.normalize) tbl.normalize();
}