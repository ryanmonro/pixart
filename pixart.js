// set color of brush with form
$('#set-color').on('click', function(event){
  event.preventDefault();
  var newColor = $('#color-field').val();
  $('.brush').css({"background": newColor});
})

// set stamp with movie poster from OMDB 
$('#set-stamp').on('click', function(event){
  event.preventDefault();
  var searchString = $('#movie-field').val();
  var options = {
    url: 'http://omdbapi.com/',
    method: 'get',
    data: {
      s: searchString,
      apikey: '2f6435d9'
    }
  }
  var appendMovies = function(response){
    var poster = response.Search[0].Poster;
    $('.brush').css({"background": "url('" + poster + "')"});
  }
  $.ajax(options).done(appendMovies) 
})

// draw 1000 .square divs
for (var y = 0; y < 50; y++){
  var outerDiv = $('<div>');
  outerDiv.addClass('square-row');
  for (var x = 0; x < 20; x++){
    var newDiv = $('<div>');
    newDiv.addClass('square');
    outerDiv.append(newDiv);
  }
  $('body').append(outerDiv);
}

// set color of square on click
$('.square').on('mouseover', function(event){
  $square = $(event.target);
  var color = $('.brush').css("background");
  console.log(color);
  $square.css({"background": color});  
})

