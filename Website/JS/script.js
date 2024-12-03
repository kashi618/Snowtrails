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

    //DROPDOWN MENU
    const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')
        toggleBtn.onclick = function (){
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')
            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
        }

    //PAGE TITLE FADE IN
    document.addEventListener("DOMContentLoaded", () =>{
        document.body.classList.add("loaded");
    });

    //Get Started Page prev/next buttons
    const contents = document.querySelectorAll('.content');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentIndex = 0;

    function updateContent(index) {
        contents.forEach((content, i) => {
            content.style.display = i === index ? 'block' : 'none';
        });
    }

    //resets scroll to view mountain after pressing prev/next
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

    