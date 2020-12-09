import React from 'react';
import Description from './Description';


const Home=()=>{
  const image = "https://images.unsplash.com/photo-1602801831978-5ee390398a0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80";

  return(
    <div className="centralPage">
      <Description />
        <img src={image} className = "homeImage" alt=""/>
    </div>
  )
}

export default Home;
