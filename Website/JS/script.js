function validateForm(event) {
    event.preventDefault();  // Prevent default form submission to allow for validation

    // Clear any previous messages
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('errorMessage').innerHTML = '';

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardExpiry = document.getElementById('cardExpiry').value;
    const cardCSV = document.getElementById('cardCSV').value;
    const mountain = document.getElementById("mountain").value;

    // Create an array to collect error messages
    const errorMessages = [];

    // Check if the first and last names are not empty
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

    // Validate card number format
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
        errorMessages.push("Please enter a valid card number (16 digits).");
    }

    // Validate card expiry date format
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryPattern.test(cardExpiry)) {
        errorMessages.push("Please enter a valid expiry date (MM/YY).");
    }

    // Validate card CSV (3 digits)
    const csvPattern = /^\d{3}$/;
    if (!csvPattern.test(cardCSV)) {
        errorMessages.push("Please enter a valid card CSV (3 digits).");
    }

    // Add validation for the mountain field
    if (!mountain || mountain === "") {
        errorMessages.push("Please select a mountain.");
    }

    // If there are any error messages, display them
    if (errorMessages.length > 0) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').innerHTML = errorMessages.join('<br>');
        return false;  
    }

    // If all validations pass, display the submitted data
    const submittedDataDiv = document.getElementById('submittedData');
    submittedDataDiv.innerHTML = `
        <h3>Thank you for booking with Snowtrails, Please confirm this is the right info and place your booking:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Card Number:</strong> ${cardNumber}</p>
        <p><strong>Card Expiry:</strong> ${cardExpiry}</p>
        <p><strong>Card CSV:</strong> ${cardCSV}</p>
        <p><strong>Mountain:</strong> ${mountain}</p>
    `;

    // Show the hidden submit button after displaying data
    document.getElementById('submitButton').style.display = 'inline-block';

    return false;  // Keep the form from submitting until the user clicks the final submit button
}

// Function to actually submit the form when the user confirms
function submitForm() {
    // Submit the form manually
    document.getElementById('myForm').submit();

    // Show success message after submission
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    successMessage.innerHTML = "Booking submitted successfully!";  

    // Hide the submit button after final submission
    document.getElementById('submitButton').style.display = 'none';  
}


// DROPDOWN MENU
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// PAGE TITLE FADE IN
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// GET STARTED PAGE PREV/NEXT BUTTONS
const contents = document.querySelectorAll('.content');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function updateContent(index) {
    contents.forEach((content, i) => {
        content.style.display = i === index ? 'block' : 'none';
    });
}

function scrollToTop() {
    window.scrollTo({ top: 500, behavior: 'smooth' });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + contents.length) % contents.length;
    updateContent(currentIndex);
    scrollToTop();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contents.length;
    updateContent(currentIndex);
    scrollToTop();
});

// Initialize content visibility
document.addEventListener("DOMContentLoaded", () => {
    updateContent(currentIndex); // Ensure the first content block is visible initially
});
