import Author from "./author.js";

class Book {

    #authors = [];

    constructor(id, title, authors, summary, subjects, cover) {

        this.id = id;
        this.title = title;
        this.authors = authors;
        this.summary = summary;
        this.subjects = subjects;
        this.cover = cover;

    }

    compareByTitle(book2) {
        const title1 = this.title;
        const title2 = book2.title;
        return title1.localeCompare(title2);
    }


    /**
     * @param {any[]} arrayAuthors
     */
    set authors(arrayAuthors) {
        
        for (const author of arrayAuthors) {
            if (!!arrayAuthors) {
                this.#authors.push(author.name, author.birth_year, author.death_year);
            } else {
                this.#authors = [];
            }
        }
    }

    get authors() {
        return this.#authors;
    }

}

export default Book;