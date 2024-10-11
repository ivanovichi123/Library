const myLibrary = [];
const booksGrid = document.querySelector(".books");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open");
const submitButton = document.querySelector("#submitButton");
const text = document.querySelector("#first_name");
const text2 = document.querySelector("#example2");
const text3 = document.querySelector("#example3");
const text4 = document.querySelector("#example4");
const closeButton = document.querySelector(".close")

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,author,pages,read) {
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
} 

const theHobbit = addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages","not read yet");
const iRobot = addBookToLibrary("I Robot", "Isaac Asimov", "758 pages", "not read yet");

function libraryInformation() {
    let libraryHtml = "";
        for (let key in myLibrary) {
            libraryHtml += "<div>" + myLibrary[key].title;
            libraryHtml += "<ul>";
            for (let item in myLibrary[key]) {
                if (item === "title") {
                    continue
                }
                libraryHtml += "<li>" + item + ": " + myLibrary[key][item] + "</li>";
            }
            libraryHtml += "</ul>" + "</div>";
        }
        booksGrid.innerHTML = libraryHtml;
}



showButton.addEventListener("click", () => {
    dialog.showModal();
});

dialog.addEventListener("close", () => {
    if (dialog.returnValue === "Close") {
        console.log("You just close the dialog");
    }
    else  {
        let title = text.value;
        let author = text2.value;
        let pages = text3.value;
        let read = text4.value;
        addBookToLibrary(title,author,pages,read);
        libraryInformation();
    }

});

closeButton.addEventListener("click", () => {
    dialog.returnValue = "Close";
    dialog.close();
})

dialog.addEventListener("keydown", theRealExample);

function theRealExample(e) {
    if(e.key === "Escape") {
        dialog.returnValue = "Close";
    }
}

libraryInformation();









