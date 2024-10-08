const myLibrary = [];
const booksGrid = document.querySelector(".books");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open");
const outputBox = document.querySelector("output");
const submitButton = document.querySelector("#submitButton");
const text = document.querySelector("#example");
const text2 = document.querySelector("#example2")

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
        console.log(libraryHtml);
}



showButton.addEventListener("click", () => {
    dialog.showModal();
});

dialog.addEventListener("close", () => {
    outputBox.value = 
    dialog.returnValue === "default" 
    ? "No return value" 
    : `ReturnValue: ${dialog.returnValue}`;
    console.log(dialog.returnValue);
    libraryInformation();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let title = text.value;
    let author = text2.value;
    let pages = "123";
    let read = "yes";
    console.log(title,author,pages,read);
    addBookToLibrary(title,author,pages,read);
    dialog.close(text.value);
})

libraryInformation();









