function validateFeedbackForm(event) {
    event.preventDefault();  // Prevent form submission to validate first

    // Clear any previous error messages
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('errorMessage').innerHTML = '';

    // Get form data
    const firstName = document.getElementById('CfirstName').value;
    const lastName = document.getElementById('ClastName').value;
    const email = document.getElementById('Cemail').value;
    const phoneNumber = document.getElementById('CphoneNumber').value;
    const feedback = document.getElementById('Feedback').value;

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

    // Check if feedback is entered
    if (!feedback) {
        errorMessages.push("Feedback is field is empty.");
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
        <h3>Submitted Feedback:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
    `;

    // Show the confirmation button
    document.getElementById('submitButton').style.display = 'inline-block';

    return false;  // Prevent immediate form submission
}

function submitFeedbackForm() {
    // Submit the form manually
    document.getElementById('feedbackForm').submit();

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    successMessage.innerHTML = "Feedback submitted successfully!";

    // Hide the submit button after submission
    document.getElementById('submitButton').style.display = 'none';
}
