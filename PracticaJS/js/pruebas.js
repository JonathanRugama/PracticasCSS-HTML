function timeRemaining (timeElapsed, endTime){

    return (endTime - timeElapsed)/2;
}

var left = timeRemaining(50,140);

console.log(left);



let favoriteBooks = [];
AddFavoriteBook("GreatLewis");
AddFavoriteBook("Limites");
AddFavoriteBook("Sorprendido por la alegria");
AddFavoriteBook("Great Abre tu mente a los numeros");
PrintFavoriteBooks();

function AddFavoriteBook (bookName) {

    if (bookName.includes('Great')) {
        favoriteBooks.push(bookName);
    }
}

function PrintFavoriteBooks () {
    console.log(`Mis libros favoritos son: ${favoriteBooks.length}`)
    for (let favoriteBook of favoriteBooks){
        console.log(`Libro: ${favoriteBook}`);
    }
}

