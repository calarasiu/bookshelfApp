import books from '../books';

export function setBooks() {
  return {
    type: 'SET_BOOKS',
    payload: books
  }
} 

