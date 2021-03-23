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

const errorNum1 = document.getElementById('error1')
const errorNum2 = document.getElementById('error2')
const errorNum3 = document.getElementById('error3')
const errorNum4 = document.getElementById('error4')
const errorNum5 = document.getElementById('error5')
const errorNum6 = document.getElementById('error6')
const errorNum7 = document.getElementById('error7')



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
function isValidDate(year, month, day) {
    let isValid = false;
	var d = new Date(year, month - 1 , day);
    console.log (d.getFullYear(), d.getMonth(), d.getDate());
    if (d.getFullYear() == year && d.getMonth() == (month - 1) && d.getDate() == day) {
		return true;
    }
	return false;
}

function birthDateChecking(elt, error){
	console.log(elt.value);
	let dateArray = elt.value.split("-");
	let valid = isValidDate(dateArray[0],dateArray[1], dateArray[2])
	if(!valid){
		error.style.display = "block";
		return false;
	}else{
		error.style.display = "none";
		return true;
	}
}

//===== Test for the input : quantity of tournaments =====
function numTournamentChecking (qtyTournament, error) {
	const regexForNumTournament = RegExp (/^\d{1,2}$/);
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
			isValid = true;
			error.style.display = "none";
		}
	});
	if(!isValid){
		error.style.display = "block";
	}
	console.log (isValid);	
	return isValid;
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
	inputRadioTest.forEach(radioBtn => {
		radioBtn.addEventListener ("click", () => {
			radioChecking(inputRadioTest, errorNum6);
		});
	});
	termAndCondition.addEventListener ("change", () => {
		termChecking(termAndCondition, errorNum7);
	});
}

/* checkingAll (); */

/* document.getElementById('ourForm').reset(); */

checkingAll ();
radioChecking(inputRadioTest, errorNum6);
termChecking(termAndCondition, errorNum7);

//===== Sending form & message end =====
ourForm.addEventListener('submit', function (event) {
	event.preventDefault();
	let firstNameValid = firstNameChecking (firstName, errorNum1);
	let lastNameValid = lastNameChecking (lastName, errorNum2);
	let mailValid = eMailChecking (eMailValid, errorNum3);
	let dateValid = birthDateChecking (birthdateValid, errorNum4);
	let numValid = numTournamentChecking (qtyTournament, errorNum5);
	let radioValid = radioChecking (inputRadioTest, errorNum6);
	let termValid = termChecking (termAndCondition, errorNum7);

	if((firstNameValid && lastNameValid && mailValid && dateValid && numValid && radioValid && termValid) === false){
		event.preventDefault();
		return;
	}
	alert('Félicitation! Nous avons bien reçu votre inscription et nous vous confirmons votre réservation pour le prochain évènement Gaming. A bientôt!');
	ourForm.requestFullscreen();
	document.getElementById('ourForm').reset();
	modalbg.style.display ="none";
})

