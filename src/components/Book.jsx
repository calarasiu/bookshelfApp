import React from 'react';

function Book(props){
  
  return (
    <div className="card">
      <h3>{props.book.Title}</h3>
      <p>{props.book.Author}</p>
      <p>{props.book.Subject}</p>
      <p>{props.book.Language}</p>
      <p>{props.book.Genre}</p>
      <p><a href={props.book.Description}>See more details...</a></p>
      <img src={props.book.Photo} alt=""/>

    </div>
  )
}

export default Book;