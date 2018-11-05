import React from 'react';
import "./Header.css";
//import sample from './timersactivity04.mp4';
import { Link } from 'react-router-dom';
// import Player from '../Video/video';
// import PlayerTwo from '../videoTwo/videoTwo'


const Header = () => (
  
  <header >
  
  <nav>
 
 
   <h6> 


    <Link className="title" to="/"> Home</Link>
      
       
        
        <Link className="title" to="/portTwo">  Portfolio </Link>
        <span className = "title1">JJ Lemons</span>
</h6>
 
    </nav>



    
  </header>

  
);

export default Header;
