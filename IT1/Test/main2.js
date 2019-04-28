var diceTotal1 = 0;
var diceTotal2 = 0;
var scoreReg=0;
var nameReg="";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBa6s-zpO_t8qULfVrmudAUplivaQtAdjE",
  authDomain: "toppscore-ad02c.firebaseapp.com",
  databaseURL: "https://toppscore-ad02c.firebaseio.com",
  projectId: "toppscore-ad02c",
  storageBucket: "toppscore-ad02c.appspot.com",
  messagingSenderId: "319445726429"
};
firebase.initializeApp(config);
// Firebase
var database = firebase.database();
var spillere = database.ref("spillere");
let txtData = document.getElementById("txtData");
var name1 = document.getElementById("inputNameA");
var name2 = document.getElementById("inputNameB");
var registrerData1 = document.getElementById("registrerData1");
var registrerData2 = document.getElementById("registrerData2");

function visData(snapshot){
let spiller = snapshot.val();
let spillerScore= `<p>
<b>${spiller.Name}: </b>
<i>${spiller.Score}</i>
</p>`;
txtData.innerHTML = txtData.innerHTML + spillerScore;
}

function namePlayers(){
  let nameA = document.getElementById("inputNameA").value;
  let nameB = document.getElementById("inputNameB").value;
  document.getElementById("playerA").innerHTML = "Player  A: "+nameA+"";
  document.getElementById("playerB").innerHTML = "Player  B: "+nameB+"";
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
spillere.orderByChild("Score").limitToLast(10).on("child_added",visData);
/* spillere.on("child_added", visData); */

function save1(){
  if (diceTotal1<=21) {
    scoreReg=diceTotal1;
    nameReg=name1.value;
    status1.innerHTML = "You saved "+scoreReg+" "+nameReg;
    spillere.push({
        Name:name1.value,
        Score:diceTotal1
      });
  }
  else {
    status1.innerHTML = "You can't save, because your score was "+diceTotal1+".";
  }
}

function save2(){
  if (diceTotal2<=21) {
    scoreReg=diceTotal2;
    nameReg=name2.value;
    status2.innerHTML = "You saved "+scoreReg+" "+nameReg;
    spillere.push({
        Name:name2.value,
        Score:diceTotal2
      });
  }
  else {
    status2.innerHTML = "You can't save, because your score was "+diceTotal2+".";
  }
}
