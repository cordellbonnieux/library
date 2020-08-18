let myLibrary = [];
let libraryGrid = document.getElementById('libraryGrid');
// Creates a book
function Book(title, author, year, pages, read){
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.read = read
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
// Add Book button in dialog box
let addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', function(){
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('authorName').value;
    let year = Number(document.getElementById('yearPublished').value);
    let pages = Number(document.getElementById('numberOfPages').value);
    let read = document.getElementById('haveRead').checked;
    if (read == true){
        read = "Have read";
    } else {
        read = "Have not read";
    }
    myLibrary.push(new Book(title, author, year, pages, read));
    libraryRefresh();
    title.value = "", author.value = "", year.value = "", pages.value = "", read.value = false;
    return hideDialog();
});
// Refreshes and prints all books to the Library
function libraryRefresh(){
    libraryGrid.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        libraryGrid.innerHTML += "<div class='bookWrapper' style='display:inline-block;'> <h2>" + myLibrary[i]["title"] + "</h2><h3>by " + myLibrary[i]["author"] + "</h3><p>Published in " + myLibrary[i]["year"] + "</p><p>" + myLibrary[i]["pages"] + " pages</p><p>" + myLibrary[i]["read"] + "</p></div>";
    }
    return;
}



myLibrary.push(new Book("The Fellowship of the Ring","J.R.R. Tolkien",1954,423,true));


