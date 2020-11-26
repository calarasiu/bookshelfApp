import React, { Component } from 'react';
import Book from '../components/Book';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setBooks } from '../actions/index';

class BooksList extends Component {
  componentWillMount(){
    this.props.setBooks()
  }
  render(){
    const books = Array.from(this.props.books);
    return(
      <div className="booksList">
        {books.map((book, index) => {
          return <Book key={index} book={book} />;
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    books:state.books
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {setBooks: setBooks}, 
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);