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
const birthdateValid = document.getElementById('birthdate')
const qtyTournament = document.getElementById('quantity')

const inputRadio1 = document.getElementById('location1')
const inputRadio2 = document.getElementById('location2')
const inputRadio3 = document.getElementById('location3')
const inputRadio4 = document.getElementById('location4')
const inputRadio5 = document.getElementById('location5')
const inputRadio6 = document.getElementById('location6')
const inputRadioTest = [inputRadio1, inputRadio2, inputRadio3, inputRadio4, inputRadio5, inputRadio6];

const termAndCondition = document.getElementById("checkbox1")

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



//===== Functions allow you to test any buttons or entries for your form =====

//===== Test for the input : firstname =====
function firstNameChecking (firstName, error) {
	let isValid = false;
	if (firstName.value.length >=2) {
		isValid = true;
		error.style.display = "none";
	}
	else {
		isValid = false;
		error.style.display = "block";
	}
	console.log (isValid);	
	return isValid;
}

//===== Test for the input : lastname =====
function lastNameChecking (lastName, error) {
	let isValid = false;
	if (lastName.value.length >=2) {
		isValid = true;
		error.style.display = "none";
	}
	else {
		isValid = false;
		error.style.display = "block";
	}
	console.log (isValid);
	return isValid;	
}
 
//===== Test for the input : mail =====
function eMailChecking (eMailValid, error) {
	const regexForEmail = RegExp (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
	let isValid = false;
	let regexValid = regexForEmail.test (eMailValid.value);
	if (regexValid) {
		isValid = true;
		error.style.display = "none";
	}
	else {
		isValid = false;
		error.style.display = "block";
	}
	console.log (isValid);
	return isValid;
}	

//===== Test for the input : birthdate =====
// let date = "29/02/2001";
//let dateArray = date.split('/');
let isValid = false;

function isValidDate(year, month, day) {
    var d = new Date(year, month - 1 , day);
    console.log(d.getFullYear(), d.getMonth(), d.getDate() )
    if (d.getFullYear() == year && d.getMonth() == (month - 1) && d.getDate() == day) {
		isValid = true;
		return isValid;
		//error.style.display = "none"
    }
	 isValid = false;
	 return isValid;
	//error.style.display = "block"
}

function birthDateChecking(elt, error){
	console.log(elt.value);
	let dateArray = elt.value.split("-");
	let valid = isValidDate(dateArray[0],dateArray[1], dateArray[2])
	if(!valid){
		error.style.display = "block";
	}else{
		error.style.display = "none";
	}
}

// console.log(date, isValidDate(dateArray[2], dateArray[1], dateArray[0]))

/* function birthdateChecking (birthdateValid, error) {
	console.log(birthdateValid.value);
	const regexForBirthdate = RegExp (/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/);
	let isValid = false;
	let regexBirthdateValid = regexForBirthdate.test (birthdateValid.value);
	if (regexBirthdateValid) {
		isValid = true;
		error.style.display = "none"
	}
	else {
		isValid = false;
		error.style.display = "block"
	}
	console.log (isValid);	
} */

// \d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1]$/)

//===== Test for the input : quantity of tournaments =====
function numTournamentChecking (qtyTournament, error) {
	const regexForNumTournament = RegExp (/^\d{2}$/);
	let isValid = false;
	let regexNumTournamentValid = regexForNumTournament.test (qtyTournament.value);
	if (regexNumTournamentValid) {
		isValid = true;
		error.style.display = "none";
	}
	else {
		isValid = false;
		error.style.display = "block";
	}
	console.log (isValid);
	return isValid;
}

//===== Test for the input : radio button =====
function radioChecking (inputs, error) {
	let isValid = false;
	inputs.forEach(input => {
		if(input.checked){
			isValid = true
			error.style.display = "none";
		}
	});
	if(!isValid){
		error.style.display = "block";
	}
	console.log (isValid);	
}
	
//===== Test for the input : terms & conditions =====
function termChecking (termAndCondition, error) {
	let isValid = false;
	if (termAndCondition.checked) {
		isValid = true;
		error.style.display = "none";
	}
	else {
		isValid = false;
		error.style.display = "block";
	}
	console.log (isValid);	
	return isValid;
}

//===== All in one =====
function checkingAll () {
	firstName.addEventListener ("keyup", () => {
		firstNameChecking(firstName, errorNum1);
   	});
   	lastName.addEventListener ("keyup", () => {
		lastNameChecking(lastName, errorNum2);
	});
	eMailValid.addEventListener ("keyup", () => {
		eMailChecking(eMailValid, errorNum3);
	});
	birthdateValid.addEventListener ("change", () => {
		birthDateChecking(birthdateValid, errorNum4);
	});
	qtyTournament.addEventListener ("keyup", () => {
		numTournamentChecking(qtyTournament, errorNum5);
	});
	/*inputRadioTest.addEventListener ("change", () => {
		radioChecking(inputRadioTest, errorNum6);
	});*/
	termAndCondition.addEventListener ("change", () => {
		termChecking(termAndCondition, errorNum7);
	});
}

checkingAll ();

//===== Sending form & message end =====
ourForm.addEventListener('submit', function (event) {
	event.preventDefault();
	radioChecking(inputRadioTest, errorNum6);
	termChecking(termAndCondition, errorNum7);	
	alert('Félicitation! Nous avons bien reçu votre inscription et nous vous confirmons votre réservation pour le prochain évènement Gaming. A bientôt!');
})

