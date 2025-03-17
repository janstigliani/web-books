import Book from "../models/book.js";
import Author from "../models/author.js";

export default class HtmlConstructor {
  constructor() {}

  /**
   * 
   * @param {Book} bookInstance 
   */
  static createBookHtml(bookInstance){

    const bookContainer = HtmlConstructor.#crateElement('a', 'book-card')
    bookContainer.href = `https://janstigliani.github.io/web-books/detail.html?id=${bookInstance.id}`

    const coverContainer = HtmlConstructor.#crateElement('div', 'cover-container')

    const imgTag = document.createElement('img')
    imgTag.classList.add('book-img')
    imgTag.src = bookInstance.cover
    imgTag.loading = 'lazy'
    coverContainer.appendChild(imgTag)

    const infoContainer = HtmlConstructor.#crateElement('div', 'book-info')

    const bookName = HtmlConstructor.#crateElement('h2', 'book-title', bookInstance.title)
    infoContainer.appendChild(bookName)

    // bookInstance.authors.forEach(author => infoContainer.appendChild(HtmlConstructor.#createAuthor( author)))
    
    // infoContainer.appendChild(HtmlConstructor.#crateElement('summary','book-summary', bookInstance.summary))
    // infoContainer.appendChild(HtmlConstructor.#createList(bookInstance.subjects))

    bookContainer.append(coverContainer, infoContainer)
    
    return bookContainer

  }

  /**
   * 
   * @param {string[]} subjects 
   */
  static #createList(subjects) {
    const list = HtmlConstructor.#crateElement('ul', 'subject-list')
    subjects.forEach(subj => list.appendChild(HtmlConstructor.#crateElement('li', 'subject-item', subj)))
    return list
  }

  /**
   * 
   * @param {Author} authorData 
   */
  static #createAuthor(authorData) {
    const container = HtmlConstructor.#crateElement('div', 'author-container')
    const name = HtmlConstructor.#crateElement('h3', 'author-name', authorData.name)
    let lifeSpanInfo = `${authorData.yob ?? 'N/A'} - ${authorData.yod ?? 'N/A'}`
    if (authorData.canCalculateAge) lifeSpanInfo += ` (${authorData.age}) years`
    const authorInfo = HtmlConstructor.#crateElement('p', 'text', lifeSpanInfo)
    container.append(name, authorInfo)
    console.log(container)
    return container
  }


  /**
   * @param {keyof HTMLElementTagNameMap} tagType 
   * @param {string} text
   * @param {string} cssClass 
   */
  static #crateElement(tagType,cssClass, text) {
    const tag = document.createElement(tagType)
    tag.classList.add(cssClass)
    if (text) {
      const txtNode = document.createTextNode(text)
      tag.appendChild(txtNode)
    }
    return tag
  }


  /**
   * 
   * @param {Book} bookInstance 
   */
  static createDetailedBookHtml(bookInstance){

    const bookContainer = HtmlConstructor.#crateElement('div', 'book-card')
    // bookContainer.href = bookInstance.id

    const coverContainer = HtmlConstructor.#crateElement('div', 'cover-container')

    const imgTag = document.createElement('img')
    imgTag.classList.add('book-img')
    imgTag.src = bookInstance.cover
    imgTag.loading = 'lazy'
    coverContainer.appendChild(imgTag)

    const infoContainer = HtmlConstructor.#crateElement('div', 'book-info')

    const bookName = HtmlConstructor.#crateElement('h2', 'book-title', bookInstance.title)
    infoContainer.appendChild(bookName)

    bookInstance.authors.forEach(author => infoContainer.appendChild(HtmlConstructor.#createAuthor( author)))
    
    infoContainer.appendChild(HtmlConstructor.#crateElement('summary','book-summary', bookInstance.summary))
    infoContainer.appendChild(HtmlConstructor.#createList(bookInstance.subjects))

    bookContainer.append(coverContainer, infoContainer)
    
    
    return bookContainer

  }
}