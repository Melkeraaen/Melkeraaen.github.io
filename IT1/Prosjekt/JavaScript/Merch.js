/* Variabel deklarasjon */
const merch = document.querySelector("#merch");
const db = firebase.database();
const merch21 = db.ref("Klær/21Merch");
const diceMerch = db.ref("Klær/DiceMerch");

/*  Lager html for dataene som hentes fra databasen */
function genererHTML(snapshot){
  let key = snapshot.key;
  let merchSnap = snapshot.val();
  merch.innerHTML += `
    <section>
      <img src="${merchSnap.Image}" width="30%"></img>
      <h4>${merchSnap.Price}</h4>
      <h2>${merchSnap.Name}</h2>
    </section>
  `;
}

/* Denne lastes ved start av siden og aktiver databasen*/
visMerch();

function visMerch(){
    merch.innerHTML = ``;
    merch21.on("child_added", genererHTML);
    diceMerch.on("child_added", genererHTML);
}

/* Denne lastes når knappen 21 Merch aktiveres - lister opp fra Klær/21Merch i databasen */
function vis21merch(){
    merch.innerHTML = ``;
    merch21.on("child_added", genererHTML);
}

/* Denne lastes når knappen Dice Merch aktiveres - lister opp fra Klær/DiceMerce i databasen */
function visDiceMerch(){
    merch.innerHTML = ``;
    diceMerch.on("child_added", genererHTML);
}
