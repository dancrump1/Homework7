
  /* // Initialize Firebase */
  var config = {
    apiKey: "AIzaSyBs5m_EAtZ54tamL20hRgayS4ihf7kc-i8",
    authDomain: "rpsmultiplayer-ca88d.firebaseapp.com",
    databaseURL: "https://rpsmultiplayer-ca88d.firebaseio.com",
    projectId: "rpsmultiplayer-ca88d",
    storageBucket: "rpsmultiplayer-ca88d.appspot.com",
    messagingSenderId: "1042121347475"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var p1RPSChoice;
  var p2RPSChoice;
  var p1Wins = 0;
  var p2Wins = 0;

 var playersSection = database.ref('/players/');

 var player1Section = playersSection.child('/player1/')
 var player1winsDB = playersSection.child('/player1wins/')

 var player2Section = playersSection.child('/player2/')
 var player2winsDB = playersSection.child('/player2wins/')

//If p1 buttons are clicked....
$(document).on("click","#p1rock-button", function(){
    p1RPSChoice = $("#p1rock-button").val();
console.log($("#p1rock-button").val());
player1Section.set({
    p1Choice: p1RPSChoice,
});
player1winsDB.set({
    p1WinCount: p1Wins
});
});
$(document).on("click","#p1paper-button", function(){
    p1RPSChoice = $("#p1paper-button").val();
console.log($("#p1paper-button").val());
player1Section.set({
    p1Choice: p1RPSChoice,
});
player1winsDB.set({
    p1WinCount: p1Wins
});
});
$(document).on("click","#p1scissors-button", function(){
    p1RPSChoice = $("#p1scissors-button").val();
console.log($("#p1scissors-button").val());
player1Section.set({
    p1Choice: p1RPSChoice
});
player1winsDB.set({
    p1WinCount: p1Wins
});
});



// if p2 buttons are clicked....
$(document).on("click","#p2rock-button", function(){
    p2RPSChoice = $("#p2rock-button").val();
console.log($("#p2rock-button").val());
player2Section.set({
    p2Choice: p2RPSChoice
});
player2winsDB.set({
    p2WinCount: p2Wins
});

});
$(document).on("click","#p2paper-button", function(){
    p2RPSChoice = $("#p2paper-button").val();
console.log($("#p2paper-button").val());
player2Section.set({
    p2Choice: p2RPSChoice
});
player2winsDB.set({
    p2WinCount: p2Wins
});

});
$(document).on("click","#p2scissors-button", function(){
    p2RPSChoice = $("#p2scissors-button").val();
console.log($("#p2scissors-button").val());
player2Section.set({
    p2Choice: p2RPSChoice
});
});



//if p1 wins, increase p1 wins
function p1Win(){
    p1Wins++;
    $("#p1wins-text").text("Wins :"+p1Wins)
    }

//if p2 wins, increase p2 wins
function p2Win(){
p2Wins++;
$("#p2wins-text").text("Wins :"+p2Wins)
}


database.ref().on("value", function(snapshot){
    var choicesObject = snapshot.val();
    // console.log(snapshot.val().p2Choice);
    p1RPSChoice = choicesObject.players.player1.p1Choice;
    p2RPSChoice = choicesObject.players.player2.p2Choice;

    p1Wins = choicesObject.players.player1wins;
    p2Wins = choicesObject.players.player2wins;

    $("#p1choice-text").text(p1RPSChoice);
    $("#p2choice-text").text(p2RPSChoice);

    $("#p1wins-text").text("Player 1 wins: "+JSON.stringify(p1Wins));
    $("#p2wins-text").text("Player 2 wins: "+JSON.stringify(p2Wins));

   
})

if (p1RPSChoice == "rock" && p2RPSChoice == "scissors"){
p1Win();
};

// Code is creating a new child in FireBase rather than manipulating the variable

// following if else statements would run through remaining potential inputs from p1+p2

//Need to impliment a login system where profiles and passwords are stored as key value pairs
// can be compared to for each login.

//Also need to limit players to one input per player per turn 

//Game does not reset firebase variables after inputs

