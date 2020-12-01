import React, { Component } from 'react';
import Book from '../components/Book';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setBooks } from '../actions/index';

class BooksList extends Component {
  constructor(){
    super()
    this.state={
      books:[]
    }
  }
  componentWillMount(){
  fetch("https://www.googleapis.com/books/v1/volumes?q=title:motivation")
  .then(function (res) {
    return res.json();
  })
  .then((result)=>{
    let items = result.items;
    this.setState({books:items})
  });
  }
    render(){
        return(
          <div className="booksList">
          
            {this.state.books.map((book, index)=>{
              return <Book key = {index} book= {book}/>
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