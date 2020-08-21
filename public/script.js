// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2u9cK-vXUhpnbMf242aEpOXGYVjDZ67U",
    authDomain: "library-36398.firebaseapp.com",
    databaseURL: "https://library-36398.firebaseio.com",
    projectId: "library-36398",
    storageBucket: "library-36398.appspot.com",
    messagingSenderId: "6950120301",
    appId: "1:6950120301:web:48ced8280f113cdce4c864",
    measurementId: "G-JMJKTP3ZJT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.database();
// Create Firebase References
var database = firebase.database();
var ref = database.ref('library');
// Book grid
let libraryGrid = document.getElementById('libraryGrid');
// Book prototype
function Book(title, author, year, pages, read){
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.read = read
}
// Shows Dialog Boxes
function showDialog(){
    document.getElementById('newBookForm').reset();
    document.getElementById('dialogBackground').style.display = "block";
    document.getElementById('dialogBox').style.display = "block";
    return
}
// Hides Dialog Boxes
function hideDialog(){
    document.getElementById('newBookForm').reset();
    document.getElementById('dialogBackground').style.display = "none";
    document.getElementById('dialogBox').style.display = "none";
    return
}
// Cancel button
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', function(){
    return hideDialog();
}); 
// Add Book button in dialog box (creates new book)
let addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', function(){
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('authorName').value;
    let year = Number(document.getElementById('yearPublished').value);
    let pages = Number(document.getElementById('numberOfPages').value);
    let read = document.getElementById('haveRead').checked;
    if(title == "" || author == "" || year == "" || pages == ""){
        return alert('You must fill in all fields to add a book.');
    }
    if (read == true){
        read = "&#10003; read";
    } else {
        read = "&#10008; Not read";
    }
    ref.push(new Book(title, author, year, pages, read));
    title.value = "", author.value = "", year.value = "", pages.value = "", read.value = false;
    return hideDialog();
});
// Print books to page
let books;
ref.on("value", function(snapshot) {
    libraryGrid.innerHTML = "";
    snapshot.forEach(function(childSnapshot){
        books = childSnapshot.val();
        let title = books.title;
        let author = books.author;
        let year = books.year;
        let pages = books.pages;
        let read = books.read;
        libraryGrid.innerHTML += "<div style='display:inline-block; margin:10px;'><div style='display:inline-block; border:1px solid #fff; padding:10px 25px 10px 25px; box-shadow:4px 4px 4px #373737; background-color:transparent;'> <h2>" + title + "</h2><h3>by " + author + "</h3><p>Published in " + year + "</p><p>" + pages + " pages</p><p>" + read + "</p></div></div>";
    })
  });


  

