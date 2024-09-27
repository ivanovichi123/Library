const myLibrary = [];
let booksGrid = document.querySelector(".books");
let example = document.createElement("div");

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

// function {

// }

const theHobbit = addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages","not read yet");
const iRobot = addBookToLibrary("I Robot", "Isaac Asimov", "758 pages", "not read yet");

console.log(myLibrary);
example.innerHTML = "Im a div from Javascript :)";
booksGrid.appendChild(example);




