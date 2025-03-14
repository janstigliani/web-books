import Book from "../models/book.js";

class BookService {
    constructor() {
        
    }

    getBooksData() {

       return fetch(`/assets/books.json`).then(response => response.json())
                                         .then(data => this.fromRawDataToBooks(data))
                                         .catch(error => console.log(error));

    }

    fromRawDataToBooks(booksData) {
        const book = [];

        for (const bookObj of booksData) {
            let subjTrim = [];
            if (bookObj.subjects.length>4) {
                subjTrim = bookObj.subjects.slice(0,4);
            } else {
                subjTrim = bookObj.subjects;
            }

            book.push(new Book(bookObj.id, bookObj.title,bookObj.authors, bookObj.summaries[0], subjTrim, bookObj.formats["image/jpeg"]))
        }
        return book;
    }
}

export default BookService;