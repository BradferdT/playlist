$(document).ready(function(){
  $.ajax({
  url: 'https://lit-fortress-6467.herokuapp.com/object',
}).done(function(data) {
  var myArr = data['results'];

  for(var i = 0; i < 3; i++){
    var rnd = myArr[Math.floor(Math.random() * myArr.length)];
    console.log(myArr.indexOf(rnd));
    console.log(myArr.length);
    $('#rnd_covers').append('<img class="cover_style" src="images/' + rnd['cover_art'] + '">');
    myArr.splice(myArr.indexOf(rnd),1);
  }
});

});
