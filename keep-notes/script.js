const addNoteBtn = document.getElementById("add");


const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}


addNoteBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add("note");


    note.innerHTML = `
    <div class="note">
        <div class="bar">
            <button id="editt" class="edit"><i class="fas fa-edit"></i></button>
            <button id="del" class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main  ${text ? "" : "hidden"}"></div>
        <textarea class=" ${text ? "hidden" : ""}"></textarea>
    </div>
    `;

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    const deletBtn = note.querySelector(".delete");
    const editBtn = note.querySelector(".edit");

    textArea.value = text;
    main.innerHTML = marked(text);


    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);

        updateLS();
    });

    deletBtn.addEventListener("click", () => {
        note.remove();

        updateLS();
    });

    document.body.appendChild(note);
}


function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}