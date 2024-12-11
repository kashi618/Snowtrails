function validateForm(event) {
    event.preventDefault();  // Prevent form submission to validate first

    // Clear any previous error messages
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('errorMessage').innerHTML = '';

    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardExpiry = document.getElementById('cardExpiry').value;
    const cardCSV = document.getElementById('cardCSV').value;
    const mountain = document.getElementById('mountain').value;

    // Create an array to collect error messages
    const errorMessages = [];

    // Check if first and last names are entered
    if (!firstName || !lastName) {
        errorMessages.push("First Name and Last Name are required.");
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Validate phone number format
    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    if (!phonePattern.test(phoneNumber)) {
        errorMessages.push("Please enter a valid phone number (e.g., +1234567890).");
    }

    // Validate card number (16 digits)
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
        errorMessages.push("Please enter a valid card number (16 digits).");
    }

    // Validate card expiry (MM/YY)
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryPattern.test(cardExpiry)) {
        errorMessages.push("Please enter a valid card expiry date (MM/YY).");
    }

    // Validate card CSV (3 digits)
    const csvPattern = /^\d{3}$/;
    if (!csvPattern.test(cardCSV)) {
        errorMessages.push("Please enter a valid card CSV (3 digits).");
    }

    // Check if a mountain is selected
    if (!mountain) {
        errorMessages.push("Please select a mountain.");
    }

    // If there are error messages, show them
    if (errorMessages.length > 0) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').innerHTML = errorMessages.join('<br>');
        return false;  // Prevent form submission
    }

    // If no errors, display submitted data
    const submittedDataDiv = document.getElementById('submittedData');
    submittedDataDiv.innerHTML = `
        <h3>Booking Information:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Card Number:</strong> ${cardNumber}</p>
        <p><strong>Card Expiry:</strong> ${cardExpiry}</p>
        <p><strong>Card CSV:</strong> ${cardCSV}</p>
        <p><strong>Mountain Selected:</strong> ${mountain}</p>
    `;

    // Show the confirmation button
    document.getElementById('submitButton').style.display = 'inline-block';

    return false;  // Prevent immediate form submission
}

function submitForm() {
    // Submit the form manually
    document.getElementById('myForm').submit();

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    successMessage.innerHTML = "Booking submitted successfully!";

    // Hide the submit button after submission
    document.getElementById('submitButton').style.display = 'none';
}
