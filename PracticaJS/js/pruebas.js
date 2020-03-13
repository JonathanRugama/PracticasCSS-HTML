function timeRemaining (timeElapsed, endTime){

    return (endTime - timeElapsed)/2;
}

var left = timeRemaining(50,140);

console.log(left);







class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
     }

     AddFavoriteBook (bookName) {
   
        if (!bookName.includes('Great')) {
            this.favoriteBooks.push(bookName);
        }
    }
    
     PrintFavoriteBooks () {
        console.log(`Mis libros favoritos son: ${String(this.favoriteBooks.length)}`)
        for (let favoriteBook of this.favoriteBooks){
            console.log(`Libro: ${favoriteBook}`);
        }
    }

}


var myBooks = new Bookshelf();
loadBooks(myBooks);

function loadBooks(theBookshelf) {
    fakeAjax(BOOK_API, function onBooks(bookNames){
        for (let bookName of bookNames) {
            theBookshelf.AddFavoriteBook(bookName);
        }
        theBookshelf.PrintFavoriteBooks();
    });
}
var BOOK_API = "https://some.url/api";

function fakeAjax(url, cb) {
    setTimeout(function fakeLoadingDelay(){
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't know JS"
        ])
    },500);
}

