const books = [];
let isEmptyBooks = false;
function addBook() {
    const bookname = document.getElementById('bookname').value;
    const authorname = document.getElementById('authorname').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookname && authorname && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookname,
            authorname: authorname,
            bookDescription: bookDescription,
            pagesNumber, pagesNumber
        };
        books.push(book);
        // console.log(books)
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
};

function showbooks() {
    if (books.length === 0) {
        const nobooks = `There are no books available.`
        const h3 = document.createElement('h3');
        h3.innerText = nobooks
        console.log('no books!', nobooks)
        document.getElementById('books').innerHTML = '';
        document.getElementById('books').appendChild(h3);
    
    }else{

        const booksDiv = books.map((book, index) => {
            return (
                `
                <h1>book Number: ${index + 1}</h1>
                <p><strong>Book Name: </strong>${book.name}</p>
                <p><strong>Author Name: </strong>${book.authorname}</p>
                <p><strong>Book Description: </strong>${book.bookDescription}</p>
                <p><strong>No. of Pages: </strong>${book.pagesNumber}</p>
                <button onclick="return deleteBook(${index})">Delete</button>
                <button onclick="return editBookDetails(${index})">Edit</button>
                `
            )
        });
        document.getElementById('books').innerHTML = booksDiv.join('');
    }
}

    function clearInputs() {
        document.getElementById('bookname').value = '';
        document.getElementById('authorname').value = '';
        document.getElementById('bookDescription').value = '';
        document.getElementById('pagesNumber').value = '';
    };

    function deleteBook(index) {
        if (confirm('Are you sure you want to delete book?')) {
            books.splice(index, 1);
            alert('Book has successfully been deleted');

            showbooks();
            console.log('deletes: ', books)
        }
    }

    function editBookDetails(){
        console.log("edits")
    }