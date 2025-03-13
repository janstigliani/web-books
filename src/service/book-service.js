class BookService {
    constructor() {
        
    }

    getBooksData() {

       return fetch(`/assets/books.json`).then(response => response.json())
                                         .then(data => console.log(data))
                                         .catch(error => console.log(error));

    }
}

export default BookService;