import React from "react";
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from './Button';
import Profile from "./Profile";
function Container() {

const {theme} = useContext(ThemeContext)
  console.log(theme);
  return <div className={`App ${theme}`}>  
        
    <Button/>
    <Profile/>
    
   </div>;
}

export default Container;
