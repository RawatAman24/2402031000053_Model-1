import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from'./Footer.js';
import Counter from './Counter.js';
import Registration from './Registration.js';
function App() {
  return (
   <div>
    <Header></Header>
    
    <Footer></Footer> 
   <Registration></Registration>
   </div>
  );
}

export default App;
