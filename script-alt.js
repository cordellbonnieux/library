let myLibrary = [];
let libraryGrid = document.getElementById('libraryGrid');
// Creates a book
function Book(title, author, year, pages, read){
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.read = read
    //might need to add the printing ability here?
}
// Shows Dialog Boxes
function showDialog(){
    document.getElementById('dialogBackground').style.display = "block";
    document.getElementById('dialogBox').style.display = "block";
    return
}
// Hides Dialog Boxes
function hideDialog(){
    document.getElementById('dialogBackground').style.display = "none";
    document.getElementById('dialogBox').style.display = "none";
    return
} 
// addBook
let addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', function(){
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('authorName').value;
    let year = Number(document.getElementById('yearPublished').value);
    let pages = Number(document.getElementById('numberOfPages').value);
    let read = document.getElementById('haveRead').value;
    myLibrary.push(new Book(title, author, year, pages, read));
    return hideDialog();
});




myLibrary.push(new Book("The Fellowship of the Ring","J.R.R. Tolkien",1954,423,true));
// this works
//for (let i = 0; i < myLibrary.length; i++){
//    libraryGrid.innerHTML += "<div class='bookWrapper' style='display:inline-block;'><ul><li>" + myLibrary[i]["title"] + "</li><li>" + myLibrary[i]["author"] + "</li><li>" + myLibrary[i]["year"] + "</li><li>" + myLibrary[i]["pages"] + "</li><li>" + myLibrary[i]["read"] + "</li></div>";
//}

