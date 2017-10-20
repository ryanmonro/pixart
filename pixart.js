// set color of brush with form
$('#set-color').on('click', function(event){
  event.preventDefault();
  var newColor = $('#color-field').val();
  $('.brush').css({"background": newColor});
})

// draw 1000 .square divs
for (var d = 0; d < 1000; d++){
  var newDiv = $('<div>');
  newDiv.addClass('square');
  $('body').append(newDiv);
}

// set color of square on click
$('.square').on('click', function(event){
  $square = $(event.target);
  console.log($square);
  $square.css({"background": "green"});
  
})
