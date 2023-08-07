import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/counter';
import Form from './components/Form';
import Login from './components/Login';
import List from  './components/List';
import API from  './components/API';

function App() {
  return (
    <div className="App">
      <Router> {/* Wrap the entire application with the Router */}
        <Header />
        <h1>Hello, React!</h1>
        <Routes>
        <Route path="/" element={<Login login={true}/>} />
          <Route path="/counter" element={<Counter initialValue={0} />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login login={true} />} />
          <Route path="/list" element={<List/>} />
          <Route path="/api" element={<API/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
