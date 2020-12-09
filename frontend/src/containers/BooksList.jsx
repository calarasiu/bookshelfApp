import React, { Component } from 'react';
import Book from '../components/Book';
import SearchBar from '../components/SearchBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setBooks } from '../actions/index';

class BooksList extends Component {
  constructor(){
    super()
    this.state={
      books:[],
      query:"productivity"
    }
  }
  getBooks=()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${this.state.query}`)
    .then(function (res) {
      return res.json();
    })
    .then((result)=>{
      let items = result.items;
      this.setState({books:items})
    });
    
  }
  componentWillMount(){
    this.getBooks();
  }

    searchFor = (event)=>{
      this.setState({query:event.target.value});
      this.getBooks();
    }
    render(){
        return(
          <div className="booksPage">
            <SearchBar searchBooks={this.searchFor}/>
            {/* <div className = "searchBar" >
              <input type="search" id="mySearch" name="q" placeholder="Search for your next read..." onChange = {this.searchFor}/>
            </div> */}
            <div className="booksList">
              {this.state.books.map((book, index)=>{
                return <Book key = {index} book= {book}/>
              })}
            </div>
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