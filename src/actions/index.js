// import books from '../books';

export function setBooks() {
  let books = [];
  fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
  .then(function (res) {
    return res.json();
  })
  .then(function (result) {
    let items = result.items;
    books.push(items);
  });
  // console.log(books);
  return {
    type: 'SET_BOOKS',
    payload: books
  }
} 

