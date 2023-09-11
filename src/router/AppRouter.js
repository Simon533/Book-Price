
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);
  return (
    <Router>
      <div>
        <Header />
       
          <Routes>
            <Route path="/" element={<BooksList/>} exact />
            <Route path="/add" element={<AddBook />}></Route>
            
          </Routes>
        </div> 
        </Router>
      
   
   
  );
};

export default AppRouter;