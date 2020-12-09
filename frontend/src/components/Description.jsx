import React from 'react';
import{Link} from 'react-router-dom';

function Description (){
  return (
    <div className="left-side">
      <h1>All you need to complete that reading list</h1>
      <p>Once you read it, a book will end up on the shelf and eventually it will never be opened again...but what about exchanging it for the next read on your list.</p>
      <Link to= "/books"><button>explore options</button></Link> 
    </div>
  )
}

export default Description;
