const db =firebase.database();
const kontakter = db.ref("kontakter");

const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpTelefon = document.querySelector("#inpTelefon");
const inpEpost = document.querySelector("#inpEpost");
const secKontakter = document.querySelector("#secKontakter");

//ekemplel på funksjon i java
/*
function f(x){
  secKontakter.innerHTML = x;
}
f("hei hei hei")
*/
function RegistrerKontakt(hendelse){
  hendelse.preventDefault();
  const key = inpTelefon.value;
  const data = {
    "navn": inpNavn.value,
    "epost": inpEpost.value
  };
  const kontakt = kontakter.child(key);
  kontakt.set(data);
  skjema.reset();
}
skjema.addEventListener("submit",RegistrerKontakt);


function visKontakter(snapshot){
  const telefon = snapshot.key;
  const Kontakt = snapshot.val();
  secKontakter.innerHTML += `
  <div>${telefon}</div>
  <div>${kontakt.navn}</div>
  <div>${kontakt.epost}</div>
  `;
}
kontakter.on("child_added",visKontakter);
