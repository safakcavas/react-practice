import React from "react";
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from './Button';
function Container() {

const {theme} = useContext(ThemeContext)
  console.log(theme);
  return <div className={`App ${theme}`}>  
        
    <Button/>
    
    
   </div>;
}

export default Container;
