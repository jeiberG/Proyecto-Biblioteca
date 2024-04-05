const myLibrary = [];

function Libro(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let readStatus = this.read ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

function addBookToLibrary() {
    let title = prompt("Enter the title of the book:");
    let author = prompt("Enter the author of the book:");
    let pages = parseInt(prompt("Enter the number of pages:"));
    let read = confirm("Have you read this book?");

    let newBook = new Libro(title, author, pages, read);
    myLibrary.push(newBook);
}

// Ejemplo de uso:
addBookToLibrary();
console.log(myLibrary);
