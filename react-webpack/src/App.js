import React from 'react';
import {
    Link,
    Routes,
    Route,
  } from "react-router-dom";

import Footer from './components/footer/footer';
import Upload from './components/upload/upload';
import Header from './components/header/header';
import Search from'./components/search/search';

import './App.css'
const App = ()=>{
    return (
        <div className="App w-100 ">
           <Link className="upload-switch" to="/Upload" >Upload</Link>
        <Link  className="search-switch" to="/Search" >Search</Link>
            <Header/>
            
        
            <Routes>
                
        <Route path="/Upload" element={<Upload />}/>
        
        <Route path="/Search" element={<Search/>} />
          
        
      </Routes>
      
     
  
            <Footer />
          
        </div>
    );
}
export default App;