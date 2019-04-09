var diceTotal1 = 0;
var diceTotal2 = 0;
var score1=0;
var score2=0;

function namePlayers(){
  var name1 = document.getElementById("inputNameA").value;
  var name2 = document.getElementById("inputNameB").value;
  document.getElementById("playerA").innerHTML = "Player  A: "+name1+".";
  document.getElementById("playerB").innerHTML = "Player  B: "+name2+".";
}

function rollDice1(){
    var die1 = document.getElementById("die1");
    document.getElementById("status1").innerHTML = "Total "+diceTotal1+".";
    var d1 = Math.floor(Math.random() * 6) + 1;
    diceTotal1 = diceTotal1+d1;
    die1.innerHTML = d1;
    if (diceTotal1<=21) {
     status1.innerHTML = "Total "+diceTotal1+".";
    } else {
     status1.innerHTML = "You lost, because your score was "+diceTotal1+".";
     diceTotal1 = 0;
    }
}

function rollDice2(){
    var die2 = document.getElementById("die2");
    document.getElementById("status2").innerHTML = "Toltal "+diceTotal2+".";
    var d2 = Math.floor(Math.random() * 6) + 1;
    diceTotal2 = diceTotal2+d2;
    die2.innerHTML = d2;
    if (diceTotal2<=21) {
     status2.innerHTML = "Total "+diceTotal2+".";
    } else {
     status2.innerHTML = "You lost, because your score was "+diceTotal2+".";
     diceTotal2 = 0;
    }
}

function save1(){
  if (diceTotal1<=21) {
   score1=diceTotal1;
 }
}

function save2(){
  if (diceTotal2<=21) {
   score2=diceTotal2;
   }
}
/*
function saveData(){
// Storing data:
    myObj = { name: "Ola", score: };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
}
function retriveData(){
// Retrieving data:
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("demo").innerHTML = obj.name+" score: "+obj.score;
}
*/
