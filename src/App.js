import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Description from './components/Description';
import BooksList from './containers/BooksList';

 const image = "https://images.unsplash.com/photo-1602801831978-5ee390398a0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80";

 function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="centralPage">
        <Description />
        <img src={image} className = "homeImage" alt=""/>
      </div>
      <div className="books">
          <Route path="/books" component = {BooksList} exact/>
      </div>

      </div>
    </Router>
  );
}

export default App;
