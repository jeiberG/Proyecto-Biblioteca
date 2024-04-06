const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false; // Assuming all books are initially unread
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks() {
    const container = document.getElementById('books-container');
    container.innerHTML = '';

    myLibrary.forEach((book, index) => {
        let card = document.createElement('div');
        card.classList.add('book-card');

        let btnClosed = document.createElement('button');
        btnClosed.textContent = 'X';
        btnClosed.classList.add('closed');
        btnClosed.addEventListener('click', () => {
            removeBook(index);
        });
        card.appendChild(btnClosed);

        let bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');

        let title = document.createElement('h1');
        title.textContent = book.title;
        bookInfo.appendChild(title);

        let author = document.createElement('p');
        author.textContent = 'By ' + book.author;
        bookInfo.appendChild(author);

        card.appendChild(bookInfo);

        let pages = document.createElement('p');
        pages.textContent = book.pages + ' Pages';
        card.appendChild(pages);

        let read = document.createElement('button');
        read.classList.add('btn-read');
        read.textContent = book.read ? 'Read' : 'Unread';
        read.addEventListener('click', () => {
            book.read = !book.read;
            read.textContent = book.read ? 'Read' : 'Unread';
        });
        card.appendChild(read);

        container.appendChild(card);
    });
}

const btnAddBook = document.querySelector('.Add-Book');
btnAddBook.addEventListener('click', () => {
    let title = prompt("Enter the title of the book:");
    let author = prompt("Enter the author of the book:");
    let pages = parseInt(prompt("Enter the number of pages:"));

    // Basic input validation
    if (title && author && pages) {
        let newBook = new Book(title, author, pages);
        addBookToLibrary(newBook);
    } else {
        alert('Please provide valid input.');
    }
});

// Initial display
displayBooks();
