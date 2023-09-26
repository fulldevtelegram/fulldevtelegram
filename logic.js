var canvas =  document.getElementById('canvasContainer');
var startDiv = document.getElementById('startGame');
var gameOverDiv=document.getElementById('endGame');
var score = document.getElementById('score');



function displayGame(){
    startDiv.setAttribute('hidden','true');
    canvas.removeAttribute('hidden');
}

function restart() {
    gameOverDiv.setAttribute('hidden', 'true');
    canvas.removeAttribute('hidden');
}

function shareScore(){
    //todo elastic mail
   let userID = prompt("Enter your telegram user ID");
   Email.send({
    Host: "smtp.gmail.com",
    Username: "byto89056@gmail.com",
    Password: "Byto1234@",
    To: 'omaralkadri4@gmail.com',
    From: "byto89056@gmail.com",
    Subject: "Sending Email using javascript",
    Body: userID+ score,
  })
    .then(function (message) {
      alert(message)
    });
}
