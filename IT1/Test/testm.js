
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

let database = firebase.database();
let meldinger = database.ref("meldinger");
let inpAvsender = document.getElementById("inpAvsender");
let inpMening = document.getElementById("inpMening");
let txtMeldinger = document.getElementById("txtMeldinger");

function visMelding(snapshot) {
let melding = snapshot.val();
let meldingTekst = `<p>
<b>${melding.avsender}: </b>
<i>${melding.tekst}</i>
</p>`;
txtMeldinger.innerHTML = txtMeldinger.innerHTML + meldingTekst;
}

meldinger.on("child_added", visMelding);
