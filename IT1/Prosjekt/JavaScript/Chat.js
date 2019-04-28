/* Variabel deklarasjon */

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

var database = firebase.database();
var meldinger = database.ref("meldinger");
var skjema = document.getElementById("skjema");

var inpAvsender = document.getElementById("inpAvsender");

var inpMening = document.getElementById("inpMening");

var txtMeldinger = document.getElementById("txtMeldinger");

/* Lister opp melinger fra databasen */
function visMelding(snapshot) {
  let melding = snapshot.val();
  let meldingTekst = `<p>
    <b>${melding.avsender}: </b>
    <i>${melding.tekst}</i>
    </p>`;
    txtMeldinger.innerHTML = txtMeldinger.innerHTML + meldingTekst;
}

/* Regestrerer nye meldinger til databasen */
function regNyMelding(evt) {
  evt.preventDefault();
  let nyMelding = {
    avsender: inpAvsender.value,
    tekst: inpMening.value
  };
  meldinger.push(nyMelding);
  inpMening.value = "";
}

meldinger.on("child_added", visMelding);
skjema.onsubmit = regNyMelding;
