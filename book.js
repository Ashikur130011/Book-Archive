// Load books 
const loadBooks = () => {
    fetch('http://openlibrary.org/search.json?q=book')
    .then(res => res.json())
    .then(data => displayBooks(data.docs));
}
loadBooks();

const displayBooks = books => {
    const bookSelf = document.getElementById('bookSelf');
    /* books.forEach(book => {
        console.log(book)
    }); */
    for ( const book of books) {
        console.log(book);
        const h3 = document.createElement('h3');
        h3.innerText = book.author_facet;
        bookSelf.appendChild(h3);
    }
}