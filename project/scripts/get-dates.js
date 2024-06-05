document.addEventListener("DOMContentLoaded", function () {
    // References on how to generate the year:
    // https://codepen.io/blazzard-jason/pen/LYrqxGJ
    const copyrightYear = {
        year: "numeric"
    };

    const yearElement = document.querySelector('footer #year');
    if (yearElement) {
        yearElement.textContent = new Date().toLocaleDateString("en-US", copyrightYear);
    }

    // References to show the date and time the document was last modified
    // https://www.tutorialspoint.com/How-to-show-the-date-and-time-the-document-was-last-modified-with-JavaScript
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified
    let lastModificationDate = document.lastModified;
    const lastModifiedElement = document.querySelector('#lastModified');

    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = `Last Modification: ${lastModificationDate}`;
    }
});
