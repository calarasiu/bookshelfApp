import React, { Component } from 'react';

const Book = ({book})=> {

  const printAuthor=(author)=>{
    for(const property in author){
      return author[property];
    }
  }
   return (
     <div className="bookCard">
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p><span className="descriptionItems">Author:</span> {printAuthor(book.volumeInfo.authors)}</p> 
          <p><span className="descriptionItems">Subtitle:</span> - {book.volumeInfo.subtitle}</p>
          <p><span className="descriptionItems">Language:</span> {book.volumeInfo.language}</p>
          <p><a href={book.volumeInfo.canonicalVolumeLink}>See more details...</a></p>
        </div>
        <img className="bookImage" src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
  
      </div>
    );
}

export default Book;