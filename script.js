// This function finds all the icon placeholders and replaces them with the actual SVG icons
lucide.createIcons();

// This finds the 'span' with the id 'year' and sets its text to the current year
document.getElementById('year').textContent = new Date().getFullYear();

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Initialize Lucide Icons
    // This function finds all elements with the `data-lucide` attribute
    // and replaces them with the corresponding SVG icon.
    lucide.createIcons();

    // 2. Set the current year in the footer
    // This finds the <span> with the id of "year" and sets its text
    // to the current year, so you don't have to update it manually.
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});