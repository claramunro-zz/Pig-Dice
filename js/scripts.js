// business logic

function Player () {
  this.currentRoll = 0,
  this.totalRoundScore = 0,
  this.totalScore = 0
}

var player1 = new Player();
var player2 = new Player();


Player.prototype.scorePointsPlayer1 = function (numberRoll) {
  if ( numberRoll != 1) {
    this.currentRoll = numberRoll;
    this.totalRoundScore += numberRoll;
    this.totalScore += numberRoll;
  }
  else {
      alert("1!");
      this.currentRoll = numberRoll;
      this.totalRoundScore = 0;
    $("#buttonsPlayer1").hide();
    $("#buttonsPlayer2").show();
  }
};

Player.prototype.scorePointsPlayer2 = function (numberRoll) {
  if ( numberRoll != 1) {
    this.currentRoll = numberRoll;
    this.totalRoundScore += numberRoll;
    this.totalScore += numberRoll;
  }
  else {
    alert("1!");
    this.currentRoll = numberRoll;
    this.totalRoundScore = 0;
    $("#buttonsPlayer2").hide();
    $("#buttonsPlayer1").show();
  }
};


Player.prototype.addPointsAndHold1 = function (numberRoll) {
  this.currentRoll = 0;
  this.totalRoundScore = 0;
  $("#buttonsPlayer1").hide();
  $("#buttonsPlayer2").show();
}
Player.prototype.addPointsAndHold2 = function () {
  this.currentRoll = 0;
  this.totalRoundScore = 0;
  $("#buttonsPlayer2").hide();
  $("#buttonsPlayer1").show();
}


Player.prototype.winner1 = function () {
  if (this.totalPoints >= 20) {
    alert("you've won!");
  }
}

Player.prototype.winner2 = function () {
  if (this.totalPoints >= 20) {
    alert("you've won!");
  }
}

var getRandomNumber = function () {
  return Math.ceil(Math.random() * Math.floor(6));
};


// user interface logic

$(document).ready(function() {
  // Player 1 User Logic
    $("#rolldice1").click(function(event){
        event.preventDefault();
        var numberRoll = getRandomNumber();
        player1.scorePointsPlayer1(numberRoll);
        $("#player1CurrentScore").text(player1.currentRoll);
        $("#player1TotalRoundScore").text(player1.totalRoundScore);
        $("#player1TotalScore").text(player1.totalScore);
        player1.winner2();
    });
    $("#hold1").click(function(event){
        event.preventDefault();
        player1.addPointsAndHold1();
        $("#player1CurrentScore").text(player1.currentRoll);
        $("#player1TotalRoundScore").text(player1.totalRoundScore);
        player1.winner1();
    });

// Player 2 User Logic
    $("#rolldice2").click(function(event){
        event.preventDefault();
        var numberRoll = getRandomNumber();
        player2.scorePointsPlayer2(numberRoll);
        $("#player2CurrentScore").text(player2.currentRoll);
        $("#player2TotalRoundScore").text(player2.totalRoundScore);
        $("#player2TotalScore").text(player2.totalScore);
        player2.winner2();
    });
    $("#hold2").click(function(event){
        event.preventDefault();
        player2.addPointsAndHold2();
        $("#player2CurrentScore").text(player2.currentRoll);
        $("#player2TotalRoundScore").text(player2.totalRoundScore);
        player2.winner2();
    });

});
