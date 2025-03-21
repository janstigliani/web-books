import BookService from "./service/book-service.js";
import HtmlConstructor from "./service/html-service.js";


const bookService = new BookService()
const urlParams = new URLSearchParams(window.location.search);
const root = document.getElementById('root')

function getBook() {
  const targetBookId = parseInt(urlParams.get('id'))
  bookService.fetchBookFromId(targetBookId).then(book => render(HtmlConstructor.createDetailedBookHtml(book)))
}

function render(bookHtml) {
  root.appendChild(bookHtml)
}

getBook()