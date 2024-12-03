function validateForm() {
// Getting information about user
let firstName  = document.getElementById("firstName").value;
let lastName   = document.getElementById("lastName").value;
let email      = document.getElementById("email").value;
let cardNumber = document.getElementById("cardNumber").value;
let cardExpiry = document.getElementById("cardExpiry").value;
let cardCSV    = document.getElementById("cardCSV").value;

if (firstName===""||lastName===""||email===""||cardNumber===""||cardExpiry===""|cardCSV==="") {
	alert("One or more missing fields. Please try again later.");
	return false;
}

// Validating email
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
}
return true;
}

function validateQuery() {

let firstName  = document.getElementById("firstName").value;
let lastName   = document.getElementById("lastName").value;
let email      = document.getElementById("email").value;
let phone      = document.getElementById("phone").value;


}
    