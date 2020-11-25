import books from '../books';

export default function setBooks() {
  return {
    type: 'SET_BOOKS',
    payload: books
  }
} 

