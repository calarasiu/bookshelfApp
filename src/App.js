import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import BooksList from './containers/BooksList';
import Home from './components/Home';


 function App() {
  return (
    <Router>
    {/* add a home page component */}
      <div className="App">
      <Navbar />
     <Switch>
        <Route path="/books" component = {BooksList} exact/>
        <Route path="/" component = {Home} />
     </Switch>
      </div>
    </Router>
  );
}

export default App;
