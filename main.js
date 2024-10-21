let myLibrary = [];
const booksGrid = document.querySelector(".books");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open");
const submitButton = document.querySelector("#submitButton");
const text = document.querySelector("#book_name");
const text2 = document.querySelector("#book_author");
const text3 = document.querySelector("#book_pages");
const text4 = document.getElementsByName("book_read");
const myForm = document.querySelector("form");
const closeButton = document.querySelector(".close");
const theButton = document.createElement("button");
theButton.innerHTML = '<button class="hello">Erase book</button>';

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

function libraryInformation() {
    console.log("the real library", myLibrary);
    let letsCount = 0;
    for (key in myLibrary) {
        if (letsCount < myLibrary.length - 1) {
            console.log(letsCount);
            console.log(myLibrary.length);
            letsCount += 1;
            continue;
        }
        let newDiv = document.createElement("div");
        newDiv.id = letsCount;
        newDiv.innerHTML = myLibrary[key].title;
        newDiv.innerHTML += "<ul>";
        for(let item in myLibrary[key]) {
            if (item === "title") {
                continue;
            }
            newDiv.innerHTML += "<li>" + item + ": " + myLibrary[key][item] + "</li>";
        }
        newDiv.innerHTML += "</ul>" + theButton.innerHTML + "</div>";
        console.log(letsCount);
        letsCount += 1;
        booksGrid.appendChild(newDiv);
    }
        let theSecondExample = document.querySelectorAll(".hello");
        for (let i = 0;i < theSecondExample.length;i++) {
            let theThirdExample = theSecondExample[i];
            theThirdExample.addEventListener("click",() => {
                delete myLibrary[i];
                let newArray = myLibrary.filter(obj => Object.keys(obj).length !== 0);
                myLibrary = newArray;
                let div = document.getElementById(i);
                div.remove();
            })
        }
        console.log(booksGrid.innerHTML);
}


showButton.addEventListener("click", () => {
    dialog.showModal();
});

dialog.addEventListener("close", () => {
    displayRadioValue();
    let text4Value = displayRadioValue();
    if (dialog.returnValue === "Close") {
        console.log("You just close the dialog");
    }
    else  {
        let title = text.value;
        let author = text2.value;
        let pages = text3.value;
        let read = text4Value;
        addBookToLibrary(title,author,pages,read);
        libraryInformation();
        myForm.reset();
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




function displayRadioValue() {
    var ele = document.getElementsByName('book_read');
    let value = 0
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            value = ele[i].value;
            console.log(value);
        }
    }
    return value;
}

