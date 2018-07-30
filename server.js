// Node Server Setup START
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// Node Server Setup END

// Express Config START
app.use('/',express.static('client/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
http.listen(process.env.PORT, process.env.IP, function(error){
    if (error){
        console.log("Server has started. Error is: " + error);
    }else{
        console.log("Server has started.")
        
    }
});
// Express Config END

const model = require('./model.js');

app.post('/runGame', function(request, result){
    console.log("Got something!");
    console.log("Data recieved ", request.body);
    
    var submission = {
        winnings: request.body['winnings[]'],
        cash: request.body.cash,
        name: request.body.name
    };
    
    if (submission.winnings == null) {
        submission.winnings = model.userNumbers(submission.winnings);
        console.log(submission.winnings);
    }
    
    console.log("Is array?", Array.isArray(submission.winning));
    
    console.log("name: " + submission.name);
    console.log("cash: " + submission.cash);
    console.log("winnings: " + submission.winnings);
        //
    submission = model.convertObject(submission);
        
    result.send(submission);
    result.send(200);
        
    var winningNumbers = model.runGame(submission);
    
    console.log("result: " + winningNumbers);
        //var success = model.saveEntry(submission);
        //var history
        
        //winningNumbers will be an object holding winningTickets:Array, cash:String, history:Objects{name:String, cash:Number, winnings: Number}
        //success will be a boolean whether entry was saved to DB or not.
        //result.send(winningNumbers, success);
});
