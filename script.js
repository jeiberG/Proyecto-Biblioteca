const myLibrary = [];

function Libro(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = prompt("Enter the title of the book:");
    let author = prompt("Enter the author of the book:");
    let pages = parseInt(prompt("Enter the number of pages:"));

    let newBook = new Libro(title, author, pages);
    myLibrary.push(newBook);
}

function displayBooks(){

    const container = document.getElementById('books-container');
    container.innerHTML = '';

    addBookToLibrary();
    
    myLibrary.forEach(book =>{
        
        let card = document.createElement('div');
        card.classList.add('book-card');

        let btnClosed = document.createElement('button');
        btnClosed.textContent = 'X';
        btnClosed.classList.add('closed');
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
        read.textContent = 'Read';
        card.appendChild(read);

        container.appendChild(card);

    })
}

const bntAddBook = document.querySelector('.Add-Book')
bntAddBook.addEventListener('click',()=>{
    displayBooks();
})