$(document).ready(function () {
    // Load notes if they exist in localStorage
    loadNotes();

    // Function to load saved notes
    function loadNotes() {
        $("#notes-container").empty(); // Clear container before loading notes

        var savedNotes = localStorage.getItem("notes");
        if (savedNotes) {
            var notes = JSON.parse(savedNotes);
            notes.forEach(function (noteText, index) {
                createNoteItem(noteText, index); // Add a unique identifier to each note
            });
        }
    }

    // Function to create a note element and add it to the container
    function createNoteItem(noteText, index) {
        var noteItem = $("<div class='note-item' data-index='" + index + "'>" + noteText + "<button class='delete-btn'>X</button></div>");
        $("#notes-container").append(noteItem);
    }

    // Save note to localStorage when save button is clicked
    $("#save-btn").click(function () {
        var note = $("#note-text").val();
        var savedNotes = localStorage.getItem("notes");
        var notesArray = savedNotes ? JSON.parse(savedNotes) : [];

        notesArray.push(note);
        localStorage.setItem("notes", JSON.stringify(notesArray));

        createNoteItem(note, notesArray.length - 1); // Create and add a note element for the saved note
        alert("Note saved successfully.");
    });

    // Delete note when clear button is clicked
    $("#clear-btn").click(function () {
        $("#note-text").val(""); // Clear note text field
        alert("Note deleted.");
    });

    // Show delete button when hovering over the note
    $("#notes-container").on("mouseenter", ".note-item", function () {
        $(this).find(".delete-btn").css("display", "inline");
    });

    // Hide delete button when mouse leaves the note
    $("#notes-container").on("mouseleave", ".note-item", function () {
        $(this).find(".delete-btn").css("display", "none");
    });

    // Delete note when delete button inside the note is clicked
    $("#notes-container").on("click", ".delete-btn", function () {
        var index = $(this).parent().data("index");
        var savedNotes = localStorage.getItem("notes");
        var notesArray = savedNotes ? JSON.parse(savedNotes) : [];

        notesArray.splice(index, 1); // Remove note from array
        localStorage.setItem("notes", JSON.stringify(notesArray));

        $(this).parent().remove(); // Remove note from DOM
        alert("Note deleted.");
    });
});
