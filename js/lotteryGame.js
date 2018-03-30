const library = require("./lotteryLibrary.js")  //this is an absolute path. Node does not understand relative path 

var batchOfTickets = [];

for (var i = 0; i < 1000000; i++) {
    batchOfTickets.push(library.ticket());
}
var winningTicket = library.ticket();

for (var i = 0; i < batchOfTickets.length; i++) {
    
    var matchingNumbers = 0;
    
    for (var e = 0; e < batchOfTickets[i].length; e++) {
        
        if (batchOfTickets[i][e] == winningTicket[e]) {
            matchingNumbers++;1
        }
        
    }
    
    if (matchingNumbers >= 5) {
        console.log("Current Ticket matches " + matchingNumbers + " Numbers to winning Numbers.");
        console.log(batchOfTickets[i]);
    }
    
    // Check typeof both arrays. Might different objects.
    if (batchOfTickets[i] == winningTicket) {
        console.log("Winning Ticket: " + batchOfTickets[i]);
    }

}

console.log("Winning Numbers: " + winningTicket);

