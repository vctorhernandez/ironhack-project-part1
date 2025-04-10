var okName = false;
var okEmail = false;
var okPhone = false;
var okMessage = false;

function validateName() {
  let nameUser = document.getElementById("name");
  if (!nameUser.value) {
    document.getElementById("errorName").hidden = false;
    nameUser.style.borderColor = "red";
    nameUser.style.borderStyle = "solid";
    okName = false;
  } else {
    document.getElementById("errorName").hidden = true;
    nameUser.style.borderStyle = "none";
    okName = nameUser.value;
  }
  checkValues();
}

function validateEmail() {
  let emailUser = document.getElementById("email");
  if (!emailUser.value) {
    document.getElementById("errorEmail").hidden = false;
    document.getElementById("errorFormatEmail").hidden = true;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
    okEmail = false;
  } else {
    document.getElementById("errorEmail").hidden = true;
    emailUser.style.borderStyle = "none";
    okEmail = emailUser.value;
  }
  var isValid = emailUser.value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!isValid) {
    document.getElementById("errorFormatEmail").hidden = false;
    document.getElementById("errorEmail").hidden = true;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
  } else {
    document.getElementById("errorFormatEmail").hidden = true;
  }
  checkValues();
}

function validatePhone() {
  let phoneNumber = document.getElementById("phone");
  if (!phoneNumber.value) {
    document.getElementById("errorPhone").hidden = false;
    phoneNumber.style.borderColor = "red";
    phoneNumber.style.borderStyle = "solid";
    okPhone = false;
  } else {
    document.getElementById("errorPhone").hidden = true;
    phoneNumber.style.borderStyle = "none";
    okPhone = phoneNumber.value;
  }
  checkValues();
}

function validateMessage() {
  let messageUser = document.getElementById("message");
  if (messageUser.value.length < 6) {
    document.getElementById("errorMessageUser").hidden = false;
    messageUser.style.borderColor = "red";
    messageUser.style.borderStyle = "solid";
    okMessage = false;
  } else {
    document.getElementById("errorMessageUser").hidden = true;
    messageUser.style.borderStyle = "none";
    okMessage = messageUser.value;
  }
  checkValues();
}

function checkValues() {
  if (okName && okEmail && okPhone && okMessage) {
    document.getElementById("errorSubmit").hidden = true;
  }
}

function sendForm() {
  let incompleteForm = document.getElementById("errorSubmit");
  if (okName && okEmail && okPhone && okMessage) {
    incompleteForm.hidden = true;
    console.log(okName, okEmail, okPhone, okMessage);
  } else {
    incompleteForm.hidden = false;
    incompleteForm.style.borderColor = "red";
  }
}
