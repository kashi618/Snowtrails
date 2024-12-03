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

document.addEventListener("DOMContentLoaded", () => {
            document.body.classList.add("loaded");
         });

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

    