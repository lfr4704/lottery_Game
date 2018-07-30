/*global $*/

$(document).ready( function() {

  $(".submit").click(function() {
    var winningNums = $("#currentNum").val().split(',');
    
    if (winningNums.length != 6) {
        console.log("Not a 6!");
        winningNums = null;
    }
    
    var entry = {
      winnings: winningNums,
      name: $("#name").val(),
      cash: $("#money").val()
    }
    
    playGame(entry);
    
    console.log(entry);
  });

  function playGame(data) {
   let results = $.post('https://lottery-vs-reality-eagarcia.c9users.io/runGame', data);
   console.log(results);
   console.log(results.responseJSON);
 }

});

function limiter(input) {
   if (input.value < 0) input.value = 0;
   if (input.value > 10000000) input.value = 10000000;
}
