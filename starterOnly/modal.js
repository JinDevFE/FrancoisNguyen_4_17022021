function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      	x.className += " responsive";
    } else {
      	x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const spanXtimes = document.getElementById("modalClose")
const ourForm = document.getElementById("ourForm")

const firstName = document.getElementById ("first")
const lastName = document.getElementById("last")
const eMailValid = document.getElementById("email")
const birthdayValid = document.getElementById('birthdate')
const qtyTournament = document.getElementById('quantity')

const inputRadio1 = document.getElementById('location1')
const inputRadio2 = document.getElementById('location2')
const inputRadio3 = document.getElementById('location3')
const inputRadio4 = document.getElementById('location4')
const inputRadio5 = document.getElementById('location5')
const inputRadio6 = document.getElementById('location6')

const termChecking = document.getElementById("checkbox1")

const errorNum1 = document.getElementById('error#1')
const errorNum2 = document.getElementById('error#2')
const errorNum3 = document.getElementById('error#3')
const errorNum4 = document.getElementById('error#4')
const errorNum5 = document.getElementById('error#5')
const errorNum6 = document.getElementById('error#6')
const errorNum7 = document.getElementById('error#7')











// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

spanXtimes.addEventListener("click", function() {
	modalbg.style.display = "none" 
})



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



// Fonctions permettant de tester chaque bouton ainsi que chaque entrée du formulaire






// Fonction tout en 1 pour la précédente





// event pour AJAX au submit avec l'utilisation de la fonction tout en 1