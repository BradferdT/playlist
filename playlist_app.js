$(document).ready(function(){
  $.ajax({
  url: 'https://lit-fortress-6467.herokuapp.com/object',
}).done(function(data) {
  var myArr = data['results'];
  var length = myArr.length
  for(var i = 0; i < length; i++){
    var rnd = myArr[Math.floor(Math.random() * myArr.length)];
    console.log(myArr.indexOf(rnd));
    console.log(myArr.length);
    $('#art_list').append('<img title="' + rnd['artist'] + ': ' + rnd['title'] + '" class="playlist_style" src="images/' + rnd['cover_art'] + '">')
    myArr.splice(myArr.indexOf(rnd),1);
  }
  $('img.playlist_style').click(function(){
    var selectedItem = $(this).attr('title');
    console.log(selectedItem);
    $('.playlist_border ul').append('<li>' + selectedItem + '<li>');
  });
});

$('#clearTracks').click(function(){
  $('.playlist_border ul li').html('');
});

$('#submitBin').click(function(){
  $.post('https://lit-fortress-6467.herokuapp.com/post')
  .done(function(){
    console.log('Success!')
  })
  .fail(function(){
    console.log('Error')
  });
});


});
