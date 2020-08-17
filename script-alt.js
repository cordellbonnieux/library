let myLibrary = [];
let libraryGrid = document.getElementById('libraryGrid');
// when 'add book' is clicked
function addBook(){
    let bookTitle = document.getElementById('bookTitle').value;
    let authorName = document.getElementById('authorName').value;
    let yearPublished = document.getElementById('yearPublished').value;
    let numberOfPages = document.getElementById('numberOfPages').value;
    let haveRead = document.getElementById('haveRead').value;
        //check for checked or not.
    myLibrary.push(new book(bookTitle, authorName, yearPublished, numberOfPages, haveRead));
    // now store these values on the page
    for (let i = 0; i < myLibrary.length; i++){
        libraryGrid.innerHTML += "<div class='bookWrapper'><ul><li>" + myLibrary[i]["title"] + "</li><li>" + myLibrary[i]["author"] + "</li><li>" + myLibrary[i]["year"] + "</li><li>" + myLibrary[i]["pages"] + "</li><li>" + myLibrary[i]["read"] + "</li></div>";
    }
    return
}
// Creates a book
function book(title, author, year, pages, read){
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


myLibrary.push(new book("The Fellowship of the Ring","J.R.R. Tolkien",1954,423,true));

for (let i = 0; i < myLibrary.length; i++){
    libraryGrid.innerHTML += "<div class='bookWrapper' style='display:inline-block;'><ul><li>" + myLibrary[i]["title"] + "</li><li>" + myLibrary[i]["author"] + "</li><li>" + myLibrary[i]["year"] + "</li><li>" + myLibrary[i]["pages"] + "</li><li>" + myLibrary[i]["read"] + "</li></div>";
}
