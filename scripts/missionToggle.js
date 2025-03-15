document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.accordion-header').forEach((header) => {
        header.addEventListener('click', function () {
            let accordion = this.parentElement;
            let content = accordion.querySelector('.accordion-content');
            let arrow = this.querySelector('.arrow');

            // Toggle the active class
            accordion.classList.toggle('active');

            // Show/hide content
            if (accordion.classList.contains('active')) {
                content.style.display = 'block';
                arrow.textContent = '▲'; // Change arrow direction
            } else {
                content.style.display = 'none';
                arrow.textContent = '▼'; // Reset arrow direction
            }
        });
    });
});
