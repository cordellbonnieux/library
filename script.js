// grid for storing the books on the page
let libraryGrid = document.getElementById("libraryGrid");
// stores all books
let myLibrary = [];
// node template
let template = `<div style="color:#000; background-color:#fff; display:inline-block; width:300px; height:300px;">
<ul style="list-style:none;">
<li>${this.title}</li>
<li>by ${this.author}</li>
<li>${this.year} <span style="text-align:right">${this.pages} pages</span></li>
<li>${this.read}</li>
</ul>
</div>
`;
// render
let render = function(book){
    libraryGrid.innerHTML += template; // something here needs to link the new book to the template
}
//add to library function
function addBookToLibrary(book){
    myLibrary.push(book);
    render(book);
}
// book prototype
function book(title, author, year, pages, read){
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.read = read
}
let testBook = new book("great title","trevor corey",1982,240,true);

// addNewBook button
let addNewBookButton = document.getElementById("addNewBook");
addNewBookButton.addEventListener('click', function() {
    dialogBackground.style.cssText = `${dialogBackgroundProperties}`;
    dialogBox.style.cssText = `${dialogBoxProperties}`;
});
// Dialog Box Background
let dialogBackground = document.getElementById('dialogBackground');
    let dialogBackgroundProperties = "margin:auto; display:block; z-index:99; position:absolute; background-color:#000; opacity:0.2; height:99%; width:99%;";
// Dialog Box (wrapper)
let DialogBox = document.getElementById('dialogBox');
    let dialogBoxProperties = "display:block; margin:200px auto auto; background-color:#fff;";
// Dialog Box Fields
let bookTitle;
// Dialog Box button
const AddBook = document.getElementById('addBook');
addBook.addEventListener('click', function(){
    //bookTitle = document.getElementById('bookTitle').textContent;
    var newBookForm = document.getElementById("newBookForm");
    var text = "";
    let i;
    for (i = 0; i < x.length ;i++) {
      new book(newBookForm.elements[i].value);
    }
});