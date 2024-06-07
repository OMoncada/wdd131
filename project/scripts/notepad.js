document.addEventListener("DOMContentLoaded", function () {
    // Load notes if they exist in localStorage
    loadNotes();

    // Function to load saved notes
    function loadNotes() {
        const notesContainer = document.getElementById("notes-container");
        notesContainer.innerHTML = ""; // Clear container before loading notes

        const savedNotes = localStorage.getItem("notes");
        if (savedNotes) {
            const notes = JSON.parse(savedNotes);
            notes.forEach(function (noteText, index) {
                createNoteItem(noteText, index);
            });
        }
    }

    // Function to create a note element and add it to the container
    function createNoteItem(noteText, index) {
        const noteItem = document.createElement("div");
        noteItem.className = "note-item";
        noteItem.setAttribute("data-index", index);
        noteItem.innerHTML = noteText + "<button class='delete-btn'>X</button>";
        document.getElementById("notes-container").appendChild(noteItem);
    }

    // Save note to localStorage when save button is clicked
    document.getElementById("save-btn").addEventListener("click", function () {
        const note = document.getElementById("note-text").value;
        const savedNotes = localStorage.getItem("notes");
        const notesArray = savedNotes ? JSON.parse(savedNotes) : [];

        notesArray.push(note);
        localStorage.setItem("notes", JSON.stringify(notesArray));

        createNoteItem(note, notesArray.length - 1); // Create and add a note element for the saved note
        document.getElementById("note-text").value = ""; // Clear the textarea
        alert("Nota guardada exitosamente.");
    });

    // Clear note text field when clear button is clicked
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("note-text").value = "";
        alert("Nota borrada.");
    });

    // Show delete button when hovering over the note
    document.getElementById("notes-container").addEventListener("mouseenter", function (event) {
        if (event.target.classList.contains("note-item")) {
            event.target.querySelector(".delete-btn").style.display = "inline";
        }
    }, true);

    // Hide delete button when mouse leaves the note
    document.getElementById("notes-container").addEventListener("mouseleave", function (event) {
        if (event.target.classList.contains("note-item")) {
            event.target.querySelector(".delete-btn").style.display = "none";
        }
    }, true);

    // Delete note when delete button inside the note is clicked
    document.getElementById("notes-container").addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const noteItem = event.target.parentNode;
            const index = noteItem.getAttribute("data-index");
            const savedNotes = localStorage.getItem("notes");
            const notesArray = savedNotes ? JSON.parse(savedNotes) : [];

            notesArray.splice(index, 1); // Remove note from array
            localStorage.setItem("notes", JSON.stringify(notesArray));

            noteItem.remove(); // Remove note from DOM
            alert("Nota eliminada.");
        }
    });
});
