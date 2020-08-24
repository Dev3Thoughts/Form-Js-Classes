// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '234324'
            },
            {
                title: 'Book Two',
                author: 'Johnny Doe',
                isbn: '2343002'
            }
        ];
        const books = StoredBooks;

        books.forEach((book) => {
            UI.addBookToList(book);
            console.log("ForEach", book);
        });
    }
    static addBookToList(book) {

        const list = document.querySelector("#book-list");
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    // delete book
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    // show alert
    static showAlert(message, className) {
        const div = document.createElement('div');

        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");

        container.insertBefore(div, form);
        // vanish in 3 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // clear the fileds
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

export default UI;