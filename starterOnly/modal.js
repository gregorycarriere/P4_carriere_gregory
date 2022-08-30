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

const closingModal = document.getElementById("closing-modal");
const closeBtn = document.getElementById("close");
const modalForm = document.getElementById("form");
const btnEnd = document.getElementById("btn-end");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  resetModal();
}

// close modal event
closeBtn.addEventListener("click", closeModal);
btnEnd.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// declaration Regex
let nameRegex = /^[A-Za-zéèïùçü\- ]{2,255}$/;
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let birthdateRegex = /^([0-9]{4})+\-([0-9]{2})+\-([0-9]{2})$/;
let nbtournamentRegex = /^[0-9]{1,2}$/;

// var recuperation
let firstname = document.getElementById("first");
let lastname = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let nbtournament = document.getElementById("quantity");
let locationtournament = document.getElementsByName("location");
let condition = document.getElementById("checkbox1");

const submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", verifForm);

const formModal = document.getElementsByTagName("form");

// function verif all
function verifForm() {
  const firstNameIsTrue = verifFirstName();
  const lastNameIsTrue = verifLastName();
  const emailIsTrue = verifEmail();
  const birthdateIsTrue = verifBirthdate();
  const nbTournamentIsTrue = verifNbTournament();
  const locationTournamentIsTrue = verifLocationTournament();
  const conditionIsTrue = verifCondition();

  if(firstNameIsTrue && lastNameIsTrue && emailIsTrue && birthdateIsTrue && nbTournamentIsTrue && locationTournamentIsTrue && conditionIsTrue){
    changeModal();
  }
}


// function verif input
function verifFirstName() {

  if(nameRegex.test(firstname.value)){
    formData[0].setAttribute("data-error-visible",false);
    formData[0].setAttribute("data-error","");
    return true;
  } else{
    formData[0].setAttribute("data-error-visible",true);
    formData[0].setAttribute("data-error","Prénom incorrect, saisir 2 lettres min.");
    return false;
  }
}

function verifLastName() {

  if(nameRegex.test(lastname.value)){
    formData[1].setAttribute("data-error-visible",false);
    formData[1].setAttribute("data-error","");
    return true;
  } else{
    formData[1].setAttribute("data-error-visible",true);
    formData[1].setAttribute("data-error","Nom incorrect, saisir 2 lettres min.");
    return false;
  }
}

function verifEmail() {

  if(emailRegex.test(email.value)){
    formData[2].setAttribute("data-error-visible",false);
    formData[2].setAttribute("data-error","");
    return true;
  } else{
    formData[2].setAttribute("data-error-visible",true);
    formData[2].setAttribute("data-error","Email incorrect");
    return false;
  }
}

function verifBirthdate() {

  if(birthdateRegex.test(birthdate.value)){
    formData[3].setAttribute("data-error-visible",false);
    formData[3].setAttribute("data-error","");
    return true;
  } else{
    formData[3].setAttribute("data-error-visible",true);
    formData[3].setAttribute("data-error","Date de naissance incorrect");
    return false;
  }
}

function verifNbTournament() {

  if(nbtournamentRegex.test(nbtournament.value)){
    formData[4].setAttribute("data-error-visible",false);
    formData[4].setAttribute("data-error","");
    return true;
  } else{
    formData[4].setAttribute("data-error-visible",true);
    formData[4].setAttribute("data-error","Nombre incorrect, choisir entre 0 et 99");
    return false;
  }
}

function verifLocationTournament() {

  locationIsChecked = false;

  for(let i=0; i < locationtournament.length; i++) {
    if(locationtournament[i].checked == true){
      console.log(locationtournament[i].value);
      locationIsChecked = true;
    }
  }

  if(locationIsChecked){
    formData[5].setAttribute("data-error-visible",false);
    formData[5].setAttribute("data-error","");
  } else{
    formData[5].setAttribute("data-error-visible",true);
    formData[5].setAttribute("data-error","Choisissez un tournoi");
    
  }

  return locationIsChecked;
}

function verifCondition() {
  
  if(condition.checked == true){
    formData[6].setAttribute("data-error-visible",false);
    formData[6].setAttribute("data-error","");
    return true;
  } else{
    formData[6].setAttribute("data-error-visible",true);
    formData[6].setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
    return false;
  }
}

function changeForm() {
  modalForm.style.display = "none";
  closingModal.style.display = "flex";

}

function resetModal() {
  modalForm.style.display = "block";
  closingModal.style.display = "none";
  modalForm.reset();
}

function changeModal() {
  closeModal();
  launchModal();
  changeForm();
}