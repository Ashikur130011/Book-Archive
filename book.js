const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data.docs));
}

const displayBooks = books => {
    const bookSelf = document.getElementById('bookSelf');
    books.forEach(book => {
        console.log(book);
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML = `
        <div class="card border border-info rounded mx-auto">
            <img src="..." class="card-img-top" alt="...">
            <h2 class="card-title">Book Name: ${book.title}</h2>
            <h3 class="card-text">Author Name: ${book.author_name}</h3>
            <h3 class="card-text">First Publish Year: ${book.first_publish_year}</h3>
            </div>
        `;
        bookSelf.appendChild(makeDiv);
    });
// Load books 
/*  const loadBooks = () => {
    fetch('http://openlibrary.org/search.json?q=book')
    .then(res => res.json())
    .then(data => displayBooks(data.docs));
}
loadBooks();

const displayBooks = books => {
    const bookSelf = document.getElementById('bookSelf');
    
     for ( const book of books) {
        console.log(book);
        const makeDiv = document.createElement('div');
        //books name
        const bookName = document.createElement('h3');
        bookName.innerText = book.title;
        makeDiv.appendChild(bookName);
        // Author name
        const authorName = document.createElement('h2');
        authorName.innerText = book.author_name;
        makeDiv.appendChild(authorName);
        bookSelf.appendChild(makeDiv)


    }
} */
}