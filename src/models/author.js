class Author {
    constructor(name, yob, yod) {
        this.name = name;
        this.yob = yob;
        this.yod = yod;
    }

    canCalculateAge() {
        return !!this.yob;
    }

    get age() {
        return !!this.yod ? this.yod - this.yob : new Date().getFullYear() - this.yob;
    }
    
}

// const au1 = new Author("titti", 1920, 1980)
// const au2 = new Author("titti2", 1920, null)
// const au3 = new Author("titti3", null, null)

// console.log(au1)
// console.log(au2)
// console.log(au3)
// console.log(au1.age)
// console.log(au2.age)
// console.log(au3.age)

export default Author; 