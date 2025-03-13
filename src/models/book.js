import Author from "./author.js";

class Book {
    constructor(title, authors, summary, subjects, cover) {

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

}