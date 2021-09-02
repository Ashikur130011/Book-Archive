const errorMessage = document.getElementById('error-msg')
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data.docs));
}

const displayBooks = books => {
    
    console.log(books.length)
    
    /* show book length */
    const bookLength = document.getElementById('book-length');
    const div = document.createElement('div');
    div.innerHTML = `Total Book Found: ${books.length}`;
    bookLength.appendChild(div);
    const bookSelf = document.getElementById('bookSelf');
    books.forEach(book => {
    if(
        book.cover_i === undefined || book.author_name === undefined || book.publisher === undefined || book.first_publish_year === undefined
    ) {
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML = `
        
        <div class="card h-100 border border-info rounded mx-auto text-center text-danger">
            <img src=" " class="card-img-top img-fluid h-75 text-danger " alt="There is no image">
            <h2 class="card-title fw-bold text-success">${book.title}</h2>
            <h3 class="card-text fst-italic">Author name: there is no record</h3>
            <h3 class="card-text">Publisher: there is no record</h3>
            <h3 class="card-text">First Publish Year: there is no record</h3>
            </div>
        `;
        bookSelf.appendChild(makeDiv);
    ;
    }
    else {
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML = `
        
        <div class="card h-100 border border-info rounded mx-auto text-center">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid h-75" alt="Cover Page">
            <h2 class="card-title fw-bold">${book.title}</h2>
            <h3 class="card-text text-success fst-italic">${book.author_name}</h3>
            <h3 class="card-text">Publisher: ${book.publisher.slice(0, 2)}</h3>
            <h3 class="card-text">First Publish Year: ${book.first_publish_year}</h3>
            </div>
        `;
        bookSelf.appendChild(makeDiv);
    
    }
})
}