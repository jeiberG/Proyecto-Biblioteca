const myLibrary = [];

function Libro(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // this.info = function() {
    //     let readStatus = this.read ? "read" : "not read yet";
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    // };
}

function addBookToLibrary() {
    let title = prompt("Enter the title of the book:");
    let author = prompt("Enter the author of the book:");
    let pages = parseInt(prompt("Enter the number of pages:"));
    let read = confirm("Have you read this book?");

    let newBook = new Libro(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks(){
    addBookToLibrary();
    const container = document.getElementById('books-container');

    let card = document.createElement('div');
    card.classList.add('book-card');

    myLibrary.forEach(book =>{
        let title = document.createElement('h1');
        title.textContent = book.title;
        card.appendChild(title);

        let author = document.createElement('p');
        author.textContent = book.author;
        card.appendChild(author);

        let pages = document.createElement('p');
        pages.textContent = book.pages;
        card.appendChild(pages);

        let read = document.createElement('p');
        read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        card.appendChild(read);

        
    })
    container.appendChild(card);
}
// Ejemplo de uso:
displayBooks();
console.log(myLibrary)
