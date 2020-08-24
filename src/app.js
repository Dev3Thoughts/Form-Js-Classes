import UI from "./UiClass";
// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Store Class: Handles Storage

// Event: Display a Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("Please fill the form", 'warning');
    } else {
        // instatiate book
        const addNewBook = new Book(title, author, isbn);

        // Add Book to UI
        UI.addBookToList(addNewBook);

        // show alert 
        UI.showAlert("Book Added", 'success');

        // clear fields
        UI.clearFields();
    }

});


// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    console.log(UI.deleteBook(e.target));
    // show alert 
    UI.showAlert("Book is deleted", 'danger');
});