console.log("scriptet er lastet");



const db = firebase.database();
const bloggere = db.ref("bloggere");

bloggere.push("sophie Elise");



bloggere.push({
  "navn":"komikerfrue",
  "folgere":59000
});




const pappahjerte = bloggere.child("pappahjerte");
pappahjerte.set({
  "navn":"peppa gris",
  "folgere":200000
});

const storePappahjerte = bloggere.child("pappahjerte");
storePappahjerte.set({
"navn":"kåre koneradi",
"folgere": 56

});
storePappahjerte.update({
  "navn":"Hans olav Lahlum"
})
