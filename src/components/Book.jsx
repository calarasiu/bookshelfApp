import React from 'react';

function Book(props){
  return (
      <h3>{props.book}</h3>
    // <div className="bookCard">
    
        
    //   <div>
    //     <p><span className="descriptionItems">Author:</span> {props.book.Author}</p>
    //     <p><span className="descriptionItems">Subject:</span> {props.book.Subject}</p>
    //     <p><span className="descriptionItems">Language:</span> {props.book.Language}</p>
    //     <p><span className="descriptionItems">Genre:</span> {props.book.Genre}</p>
    //     <p><a href={props.book.Description}>See more details...</a></p>
    //   </div>
    //   <img className="bookImage" src={props.book.Photo} alt=""/>

    // </div>
  )
}

export default Book;