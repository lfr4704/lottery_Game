// (Luis + Minda + Ed) building this model 

function randomLotteryGenerator() {
    var ticket = [];
    
    for (var i = 0; i < 5; i++) {
        
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
    
    function sortNumber(a, b) {
    return a - b;
}
    
    ticket.sort(sortNumber);
        
    randomNumber = Math.floor(Math.random() * 27) + 1;
    ticket.push(randomNumber);
        
    return ticket;
    
}
//get the user's input in $ and divide by 2 (each ticket cost $2)

//this converst the user input object to integers as needed
function convertObject(userObject){
    
    var convertedObject = {
        name: userObject.name,
        cash: parseInt(userObject.cash),
        winnings: userObject.winnings.map(Number)
    }
    
    console.log(convertedObject);
    return convertedObject;
}

//this accepts the users winning numbers or generates numbers in not entered
//Input: entry Object, output: Array of Winning Numbers.
function userNumbers(entry){
    if (entry == null){
        var winningTicket = randomLotteryGenerator();
            
    }else{
        var winningTicket = entry;
    }
    return winningTicket;
}

function runGame(entry){
    
    var batchOfTickets = [];
    
    var ticketNumber = Math.floor(entry.cash/2);

    for (var i = 0; i < ticketNumber ; i++) {
        batchOfTickets.push(randomLotteryGenerator());
        }
    
    for (var i = 0; i < batchOfTickets.length; i++) {
        
        var matchingNumbers = 0;
        
        for (var e = 0; e < 6; e++) {
            
            if (batchOfTickets[i][e] == entry.winnings[e]) {
                matchingNumbers++;
            }
        }
        
        if (matchingNumbers >= 5) {
            console.log(batchOfTickets[i][e]);
            return true;
    
        }
    }

return false;

}

module.exports = {
    ticket: randomLotteryGenerator,
    convertObject,
    runGame,
    userNumbers
}