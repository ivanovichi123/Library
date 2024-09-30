const myLibrary = [];
const booksGrid = document.querySelector(".books");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,author,pages,read) {
    // let title = prompt("Insert title");
    // let author = prompt("Insert author");
    // let pages = prompt("Insert pages");
    // let read = prompt("Yes or no");
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

libraryInformation();

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});








