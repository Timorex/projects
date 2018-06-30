// Select color input
// Select siz
// When size is submitted by the

const canvas = $('#pixelCanvas');
const colorPicker = $('#colorPicker');
// clicking the submit button
$('#sizePicker').submit(function(event) {
  makeGrid(); // creating the grid
  event.preventDefault(); // making sure the grid won't disapper
});

// making the grid
function makeGrid(){
  canvas.children().remove(); // erases the previous grid
  let gridHeigth = $('#inputHeight').val(); // gets the number of entered rows
  let gridWidth = $('#inputWeight').val();  // gets the number of entered columns

  // the loop: one row - several column cells - and so so ...
  for (let i = 1; i <= gridHeigth; i++) {
    canvas.append('<tr></tr>'); // gridHeigth are formed

    for (let j = 1; j <= gridWidth; j++) {
      canvas.children().last().append('<td></td'); // columns are added only to the last row
      $('td').addClass('cells'); // each cell can be targeted and has lines
    }
  }

    // clicking the grid's cell - filling the cell with colour
    $('.cells').click(function() {
      let paint = colorPicker.val();
      $(this).css('background-color', paint);
    });

  }