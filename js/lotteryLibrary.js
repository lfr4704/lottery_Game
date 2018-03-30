//random lottery ticket generator

function sortNumbers(a,b){ //this function is needed to sort numbers in array
      return a-b;
}

function randomLotteryGenerator() {
    var ticket = [];
    
    for (var i = 0; i < 6; i++) {
        
        var randomNumber = Math.floor(Math.random() * 56) + 1;
        
        var runLoop = true;
        
        while(runLoop) {
            if (ticket.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 56) + 1;
            } else {
                ticket.push(randomNumber);
                runLoop = false;
            }
        }
    }
    
    ticket.sort(sortNumbers);
    return ticket;
}

//this code tell what functions are allowed to run in this file.
module.exports = { 
    ticket: randomLotteryGenerator
}